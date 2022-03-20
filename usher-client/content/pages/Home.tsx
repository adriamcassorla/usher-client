import * as React from "react";
const { useContext, useEffect, useState } = React;
import { Center } from "native-base";

import { EventsContext } from "../../services/contexts/EventsContext";
import HomeList from "../../components/home/HomeList";

const Home = () => {
  // * NOTE *  City should be a state depending on picker
  const city = "Barcelona";

  const { events, populateEvents } = useContext(EventsContext);

  useEffect(() => {
    populateEvents(city), [city];
  }, []);

  return (
    <Center w="full" h="full" bgColor={"dark.50"}>
      <HomeList events={events} />
    </Center>
  );
};

export default Home;
