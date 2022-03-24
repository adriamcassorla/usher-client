import { Dimensions, StyleSheet } from "react-native";
import * as React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useEffect, useState } from "react";
import MapStyle from "./../../styles/mapStyle";
import MapMarker from "./MapMarker";

type Props = {
  selectedVenue: string | null;
  setSelectedVenue: React.Dispatch<React.SetStateAction<string | null>>;
  events: EventType[] | null;
};

const MapScreen = ({ selectedVenue, setSelectedVenue, events }: Props) => {
  const [venues, setVenues] = useState<Venue[] | null>(null);
  useEffect(() => {
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

  const initialRegion = {
    latitudeDelta: 0.06,
    longitudeDelta: 0.06,
    latitude: 41.387,
    longitude: 2.17,
  };
  const mapRef = React.useRef<MapView>();
  return venues ? (
    <MapView
      style={styles.map}
      initialRegion={initialRegion}
      customMapStyle={MapStyle}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      //@ts-ignore
      ref={mapRef}
    >
      {venues.map((venue) => (
        <MapMarker
          venue={venue}
          selectedVenue={selectedVenue}
          setSelectedVenue={setSelectedVenue}
          mapRef={mapRef}
          key={venue.id}
        ></MapMarker>
      ))}
    </MapView>
  ) : null;
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: Dimensions.get("screen").height,
  },
});
