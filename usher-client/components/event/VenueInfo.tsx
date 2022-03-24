import { View, Heading, Text, Button } from "native-base";
import { Linking, StyleSheet } from "react-native";

import * as React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapStyle from "./../../styles/mapStyle";
const mapsURL = "https://maps.google.com/?saddr=";

const VenueInfo = ({ venue }: { venue: Venue }) => {
  const region = {
    latitudeDelta: 0.004,
    longitudeDelta: 0.004,
    latitude: venue.latitude,
    longitude: venue.longitude,
  };
  return (
    <View h={200} w={"100%"} ml={"5%"}>
      <MapView
        style={styles.map}
        region={region}
        customMapStyle={MapStyle}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={false}
        pitchEnabled={false}
        showsBuildings={true}
        tintColor={"blue"}
      >
        <Marker coordinate={region} pinColor={"white"} />
      </MapView>
      <Heading mt={3} size={"md"} color={"dark.200"}>
        {venue.name}
      </Heading>
      <Text color={"dark.300"}>
        {venue.address} {venue.city} {venue.zipcode}
      </Text>
      <Button
        w={"50%"}
        ml={"20%"}
        mt={5}
        variant="outline"
        onPress={async () => {
          await Linking.openURL(
            mapsURL + venue.latitude + "," + venue.longitude
          );
        }}
      >
        Get directions
      </Button>
    </View>
  );
};

export default VenueInfo;

const styles = StyleSheet.create({
  map: {
    marginTop: "5%",
    width: "90%",
    height: 200,
    borderRadius: 10,
  },
});
