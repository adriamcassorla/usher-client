import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";

import MapStyle from "./../../styles/mapStyle";

import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { HomeTabParamList } from "../../utils/Types/navTypes";
type Props = BottomTabScreenProps<HomeTabParamList, "Map">;

const Map = ({ navigation }: Props) => {
  const [region, setRegion] = useState<Region | null>(null);

  useEffect(() => {
    setRegion({
      latitudeDelta: 0.2,
      longitudeDelta: 0.2,
      latitude: 41.39503470081469,
      longitude: 2.197844838373114,
    });
  }, []);

  return region ? (
    <MapView
      style={styles.map}
      initialRegion={region}
      customMapStyle={MapStyle}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
    ></MapView>
  ) : null;
};

export default Map;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
