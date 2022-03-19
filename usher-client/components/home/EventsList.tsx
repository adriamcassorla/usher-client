import { Text } from "react-native";
import * as React from "react";

import { Button, View, FlatList } from "native-base";
import EventCard from "./EventCard";

type Props = {
  events: EventType[];
};

const EventsList = ({ events }: Props) => {
  //TODO: Fix flat list. Event card component?
  const _renderItem = ({ item, index, separator }) => (
    <EventCard event={item} />
  );
  return (
    <View h={500} mt={6}>
      <Text style={{ textAlign: "center" }}>Mini event cards List</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        margin={2}
        data={events}
        renderItem={_renderItem}
      />
    </View>
  );
};

export default EventsList;
