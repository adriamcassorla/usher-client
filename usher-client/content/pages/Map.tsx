import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { HomeTabParamList } from "../../utils/Types/navTypes";
import MapScreen from "../../components/map/MapScreen";
import { View, ZStack } from "native-base";
import { FilterMenu } from "../../components/home";
import { EventsContext } from "../../services/contexts/EventsContext";
import { filterEvents } from "../../utils/helpers/filter";
import MapEventList from "../../components/map/MapEventList";
type Props = BottomTabScreenProps<HomeTabParamList, "Map">;

const Map = ({ navigation }: Props) => {
  const { events } = useContext(EventsContext);
  const [selectedVenue, setSelectedVenue] = useState<string | null>(null);
  const [filtered, setFiltered] = useState(events);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    if (events) {
      setFiltered(filterEvents(events, filters));
    }
  }, [filters]);

  return (
    <ZStack>
      <MapScreen
        events={filtered}
        selectedVenue={selectedVenue}
        setSelectedVenue={setSelectedVenue}
      />
      <MapEventList venueId={selectedVenue} events={filtered}></MapEventList>
      <FilterMenu isOnTop={false} filters={filters} setFilters={setFilters} />
    </ZStack>
  );
};
export default Map;
