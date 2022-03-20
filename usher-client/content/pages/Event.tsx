import * as React from "react";
import { Center, Text, Button } from "native-base";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../../utils/Types/navTypes";
type Props = NativeStackScreenProps<MainStackParamList, "Event">;

const Event = ({ navigation, route }: Props) => {
  const eventId = route.params.eventId;

  return (
    <Center h={"full"} w={"full"}>
      <Text>Event page for event with id {eventId}</Text>
      <Button
        colorScheme="primary"
        onPress={() => {
          navigation.navigate("Payment", { showId: "testing" });
        }}
      >
        Book tickets
      </Button>
    </Center>
  );
};

export default Event;
