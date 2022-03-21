import * as React from "react";
import { Button, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { MainStackNavType } from "../../utils/Types/navTypes";

type Props = {
  event: EventType;
};

const HighlightCard = ({ event }: Props) => {
  const navigation = useNavigation<MainStackNavType>();
  return (
    <Center bg={"dark.600"} w={250} h={250} key={event} borderRadius={20}>
      <Button
        onPress={() =>
          navigation.navigate("Event", {
            eventId: event.id,
            todayShow: event.today_shows,
          })
        }
      >
        {event.name}
      </Button>
    </Center>
  );
};

export default React.memo(
  HighlightCard,
  (prev, next) => prev.event.id === next.event.id
);
