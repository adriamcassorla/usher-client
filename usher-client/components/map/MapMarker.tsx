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
    latitudeDelta: 0.04,
    longitudeDelta: 0.04,
    latitude: 41.387,
    longitude: 2.17,
  };
  return (
    <Marker
      title={venue.name}
      coordinate={{
        latitude: venue.latitude,
        longitude: venue.longitude,
      }}
      pinColor={selectedVenue === venue.id ? primary700 : dark500}
      opacity={selectedVenue === venue.id ? 1 : 0.8}
      key={venue.id!}
      onPress={() => {
        setSelectedVenue(venue.id);
        mapRef.current?.animateToRegion(
          {
            ...basicRegion,
            latitude: venue.latitude,
            longitude: venue.longitude,
          },
          300
        );
      }}
    >
      <Callout tooltip={true}>
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
