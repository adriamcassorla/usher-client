import * as React from "react";
const { useEffect } = React;
import { Center } from "native-base";

import { useEventsContext } from "../../services/contexts/EventsContext";
import HomeList from "../../components/home/HomeList";
import GradientProvider from "../../components/GradientProvider";

const Home = () => {
  // * NOTE *  City should be a state depending on picker
  const city = "Barcelona";

  const { events, populateEvents } = useEventsContext();

  useEffect(() => {
    populateEvents(city), [city];
  }, []);

  return (
    <GradientProvider>
      <Center w="full" h="full">
        <HomeList events={events} />
      </Center>
    </GradientProvider>
  );
};

export default Home;
