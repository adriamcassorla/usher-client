import * as React from "react";
import { useState } from "react";

import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { HomeTabParamList } from "../../utils/Types/navTypes";
import MapScreen from "../../components/map/MapScreen";
type Props = BottomTabScreenProps<HomeTabParamList, "Map">;

const Map = ({ navigation }: Props) => {
  const [selectedVenue, setSelectedVenue] = useState<string | null>(null);

  return (
    <MapScreen
      selectedVenue={selectedVenue}
      setSelectedVenue={setSelectedVenue}
    />
  );
};
export default Map;
