import { View, Text } from "react-native";
import * as React from "react";

type props = {
  event: EventType;
};

const MiniEventCard = ({ event }: props) => {
  return (
    <View style={{ backgroundColor: "blue", padding: 10, margin: 10 }}>
      <Text style={{ color: "white" }}>
        Event card for an event from: {event.name}
      </Text>
    </View>
  );
};

export default MiniEventCard;
