import * as React from "react";
const { useContext, useEffect, useState } = React;
import { Center, Spinner } from "native-base";

import { EventsContext } from "../../services/contexts/EventsContext";
import HomeList from "../../components/home/HomeList";

import { LinearGradient } from "expo-linear-gradient";
import GradientProvider from "../../components/GradientProvider";

const Home = () => {
  // * NOTE *  City should be a state depending on picker
  const city = "Barcelona";

  const { events, populateEvents } = useContext(EventsContext);

  useEffect(() => {
    populateEvents(city), [city];
  }, []);

  if (!events) return <Spinner color="primary.500" />;
  return (
    <GradientProvider>
      <Center w="full" h="full">
        <HomeList events={events} />
      </Center>
    </GradientProvider>
  );
};

export default Home;
