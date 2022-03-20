import { View, Text } from "react-native";
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { MainStackNavType } from "../../utils/Types/navTypes";

type Props = {
  event: EventType;
};

const MiniEventCard = ({ event }: Props) => {
  const navigation = useNavigation<MainStackNavType>();
  return (
    <View style={{ backgroundColor: "blue", padding: 10, margin: 10 }}>
      <Text style={{ color: "white" }}>
        Event card for an event from: {event.name}
      </Text>
    </View>
  );
};

export default MiniEventCard;
