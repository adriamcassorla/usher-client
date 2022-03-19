import { View, Text } from "react-native";
import * as React from "react";

import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
type Props = BottomTabScreenProps<HomeTabParamList, "Map">;

const Map = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Map</Text>
    </View>
  );
};

export default Map;
