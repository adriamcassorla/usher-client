import * as React from "react";
import { useEffect, useState } from "react";
import { Center, Text, Button } from "native-base";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../../utils/Types/navTypes";
import { getEventInfo } from "../../services/api/events";
type Props = NativeStackScreenProps<MainStackParamList, "Event">;

const Event = ({ navigation, route }: Props) => {
  const { eventId, isToday } = route.params;
  const [eventInfo, setEventInfo] = useState<EventType | null>(null);

  useEffect(() => {
    getEventInfo(eventId, isToday).then(setEventInfo);
  }, [eventId]);

  if (!eventInfo) return null;
  return (
    <Center h={"full"} w={"full"} bgColor={"dark.50"}>
      <Text>Event page for event: {eventInfo.name}</Text>
      {isToday ? (
        <Button
          onPress={() => {
            navigation.navigate("Payment", { showId: "testing" });
          }}
        >
          Book tickets
        </Button>
      ) : null}
    </Center>
  );
};

export default Event;
