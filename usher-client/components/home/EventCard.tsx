import { View, Text } from "react-native";
import * as React from "react";

import { Button, Center, Image } from "native-base";

const EventCard = ({ event, navigation }) => {
  return (
    <Center h={20} w={"full"}>
      <Text>EventCard for event {event.name}</Text>

      <Button
        w={"80%"}
        colorScheme="primary"
        onPress={() => {
          navigation.navigate("Event");
        }}
      >
        Check event
      </Button>
    </Center>
  );
};

export default EventCard;
