import * as React from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import { Center, Heading, useToken, Text } from "native-base";

type Props = {
  venue: Venue;
  selectedVenue: string | null;
  setSelectedVenue: React.Dispatch<React.SetStateAction<string | null>>;
  mapRef: React.MutableRefObject<MapView | undefined>;
};

const MapMarker = ({
  venue,
  selectedVenue,
  setSelectedVenue,
  mapRef,
}: Props) => {
  const [primary700, dark500] = useToken("colors", ["primary.700", "dark.500"]);
  const basicRegion = {
    latitudeDelta: 0.06,
    longitudeDelta: 0.06,
    latitude: 41.387,
    longitude: 2.17,
  };

  const handlePress = (venue: Venue) => {
    if (venue.id === selectedVenue) {
      markerRef.current?.hideCallout();
      setSelectedVenue(null);
      mapRef.current?.animateToRegion(basicRegion);
    } else {
      setSelectedVenue(venue.id);
      mapRef.current?.animateToRegion(
        {
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
          latitude: venue.latitude,
          longitude: venue.longitude,
        },
        300
      );
    }
  };

  const markerRef = React.useRef<Marker>();
  return (
    <Marker
      title={venue.name}
      coordinate={{
        latitude: venue.latitude,
        longitude: venue.longitude,
      }}
      pinColor={selectedVenue === venue.id ? primary700 : dark500}
      opacity={selectedVenue === venue.id ? 1 : 0.8}
      onPress={() => handlePress(venue)}
      //@ts-ignore
      ref={markerRef}
    >
      <Callout tooltip={true} onPress={() => handlePress(venue)}>
        <Center bg={"dark.900"} rounded={20} mb={1} py={1} px={2}>
          <Heading color={"primary.500"} size={"md"}>
            {venue.name}
          </Heading>
          <Text>{venue.address}</Text>
        </Center>
      </Callout>
    </Marker>
  );
};

export default MapMarker;
