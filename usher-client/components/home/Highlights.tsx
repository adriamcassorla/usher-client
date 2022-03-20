import * as React from "react";
import { useContext, useCallback } from "react";
import { Center, Text, useSafeArea } from "native-base";

import { useFocusEffect } from "@react-navigation/native";
import { EventsContext } from "../../services/contexts/EventsContext";
import { getRandomTopEvents } from "../../utils/helpers/home";
import HighlightsCarrousel from "./HighlightsCarrousel";

const Highlights = () => {
  const { events } = useContext(EventsContext);
  const [topEvents, setTopEvents] = React.useState<EventType[] | null>(null);

  useFocusEffect(
    useCallback(() => {
      if (events) {
        setTopEvents(getRandomTopEvents(events));
      }
    }, [events])
  );

  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
    pt: 2,
  });

  if (!topEvents) return <Text>Loading...</Text>;
  return (
    <Center h={"305"} w={"full"} {...safeAreaProps}>
      <HighlightsCarrousel topEvents={topEvents} />
    </Center>
  );
};

export default Highlights;
