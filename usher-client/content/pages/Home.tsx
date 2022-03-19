import * as React from "react";
const { useContext, useEffect } = React;

import { FlatList, Center } from "native-base";
import { Highlights, FilterMenu, EventCard } from "../../components/home";
import { EventsContext } from "../../services/contexts/EventsContext";

import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
type Props = BottomTabScreenProps<HomeTabParamList, "Home">;

const Home = ({ navigation }: Props) => {
  // * NOTE *  City should be a state depending on picker
  const city = "Barcelona";

  const { events, populateEvents } = useContext(EventsContext);

  useEffect(() => {
    populateEvents(city), [city];
  });

  // const events = ['_HIGHLIGHTS', '_FILTERS',0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const _renderItem = ({ item, index }) => {
    if (index === 0) return <Highlights topEvents={[]} />;
    if (index === 1) return <FilterMenu />;
    return <EventCard event={item} />;
  };

  return (
    <Center w="full" h="full">
      <FlatList
        data={events}
        stickyHeaderIndices={[1]}
        renderItem={_renderItem}
        keyExtractor={(item) => String(item.id)}
      />
    </Center>
  );
};

export default Home;
