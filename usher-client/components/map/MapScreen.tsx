import { Dimensions, StyleSheet } from "react-native";
import * as React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useContext, useEffect, useState } from "react";
import { EventsContext } from "../../services/contexts/EventsContext";
import MapStyle from "./../../styles/mapStyle";
import MapMarker from "./MapMarker";

type Props = {
  selectedVenue: string | null;
  setSelectedVenue: React.Dispatch<React.SetStateAction<string | null>>;
};

const MapScreen = ({ selectedVenue, setSelectedVenue }: Props) => {
  const { events } = useContext(EventsContext);
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
      ref={mapRef}
    >
      {venues.map((venue) => (
        <MapMarker
          venue={venue}
          selectedVenue={selectedVenue}
          setSelectedVenue={setSelectedVenue}
          mapRef={mapRef}
        ></MapMarker>
      ))}
    </MapView>
  ) : null;
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: Dimensions.get("screen").height,
  },
});
