import * as React from "react";
const { useContext, useEffect, useState } = React;

import { FlatList, Center } from "native-base";
import { Highlights, FilterMenu, EventCard } from "../../components/home";
import { EventsContext } from "../../services/contexts/EventsContext";

const Home = () => {
  // * NOTE *  City should be a state depending on picker
  const city = "Barcelona";

  const { events, populateEvents } = useContext(EventsContext);
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    populateEvents(city), [city];
  });

  // const events = ['_HIGHLIGHTS', '_FILTERS',0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const _renderItem = ({ item, index }) => {
    if (index === 0) return <Highlights topEvents={[]} />;
    if (index === 1) return <FilterMenu isTop={isTop} />;
    return <EventCard event={item} />;
  };

  const handleScroll = (event) => {
    const yPos = event.nativeEvent.contentOffset.y;
    if (yPos > 200) setIsTop(true);
    else setIsTop(false);
  };

  return (
    <Center w="full" h="full" bgColor={"dark.50"}>
      <FlatList
        data={events}
        stickyHeaderIndices={[1]}
        onScroll={handleScroll}
        renderItem={_renderItem}
        keyExtractor={(item) => String(item.id)}
      />
    </Center>
  );
};

export default Home;
