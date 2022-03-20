import * as React from "react";
import { useContext, useCallback } from "react";
import { Button, Center, Text } from "native-base";
import Carousel from "react-native-snap-carousel";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { MainStackNavType } from "../../utils/Types/navTypes";
import { EventsContext } from "../../services/contexts/EventsContext";
import { getRandomTopEvents } from "../../utils/helpers/home";

const Highlights = () => {
  const navigation = useNavigation<MainStackNavType>();
  const { events } = useContext(EventsContext);
  const [topEvents, setTopEvents] = React.useState<EventType[] | null>(null);
  useFocusEffect(
    useCallback(() => {
      if (events) {
        setTopEvents(getRandomTopEvents(events));
      }
    }, [events])
  );

  const _renderItem = ({ item }: { item: EventType }) => {
    return (
      <Center bg={"primary.100"} w={200} h={200} zIndex={2} key={item}>
        <Button
          onPress={() => navigation.navigate("Event", { eventId: item.id })}
        >
          {item.name}
        </Button>
      </Center>
    );
  };

  if (!topEvents) return <Text>Loading...</Text>;
  return (
    <Center h={"200"} w={"full"} pt={12}>
      <Carousel
        style={{ borderColor: "green", borderWidth: 5, borderStyle: "solid" }}
        sliderWidth={200}
        itemWidth={200}
        data={topEvents}
        renderItem={_renderItem}
        horizontal={true}
      />
    </Center>
  );
};

export default Highlights;
