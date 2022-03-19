import * as React from "react";

import { Center, Text, Button } from "native-base";

const Event = ({ navigation, route }) => {
  const eventId = route.params.eventId;

  return (
    <Center h={"full"} w={"full"}>
      <Text>Event page for event with id {eventId}</Text>
      <Button
        colorScheme="primary"
        onPress={() => {
          navigation.navigate("Payment");
        }}
      >
        Book tickets
      </Button>
    </Center>
  );
};

export default Event;
