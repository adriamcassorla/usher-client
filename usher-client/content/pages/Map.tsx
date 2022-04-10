import * as React from "react";
import { useState, useEffect, useContext } from "react";
import MapScreen from "../../components/map/MapScreen";
import MapEventList from "../../components/map/MapEventList";
import { ZStack } from "native-base";
import { FilterMenu } from "../../components/home";
import { useEventsContext } from "../../services/contexts/EventsContext";
import { filterEvents } from "../../utils/helpers/filter";
import { useStatusContext } from "../../services/contexts/StatusContext";

const Map = () => {
  const { events } = useEventsContext();
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
