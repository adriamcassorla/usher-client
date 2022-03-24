import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";

import MapStyle from "./../../styles/mapStyle";

import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { HomeTabParamList } from "../../utils/Types/navTypes";
import { EventsContext } from "../../services/contexts/EventsContext";
import { useToken } from "native-base";
type Props = BottomTabScreenProps<HomeTabParamList, "Map">;

const Map = ({ navigation }: Props) => {
  const [region, setRegion] = useState<Region | null>(null);
  const { events } = useContext(EventsContext);
  const [venues, setVenues] = useState<Venue[] | null>(null);
  const [primary700] = useToken("colors", ["primary.700"]);

  useEffect(() => {
    //Plaça Catalunya for now, todo: currentLoc
    setRegion({
      latitudeDelta: 0.06,
      longitudeDelta: 0.06,
      latitude: 41.38701122803814,
      longitude: 2.1700531955358544,
    });
    if (events) {
      let uniqueVenues: Venue[] = [];
      events.forEach((event) => {
        if (!uniqueVenues.some((venue) => venue.id === event.venue.id)) {
          uniqueVenues.push(event.venue);
        }
      });
      setVenues(uniqueVenues);
    }
  }, [events]);

  return region ? (
    <MapView
      style={styles.map}
      initialRegion={region}
      customMapStyle={MapStyle}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
    >
      {venues
        ? venues.map((venue) => (
            <Marker
              coordinate={{
                latitude: venue.latitude,
                longitude: venue.longitude,
              }}
              pinColor={primary700}
              key={venue.id!}
            ></Marker>
          ))
        : null}
    </MapView>
  ) : null;
};

export default Map;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
