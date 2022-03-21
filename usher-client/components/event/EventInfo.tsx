import { Center, Heading } from "native-base";
import * as React from "react";

const EventInfo = ({ event }: { event: EventType }) => {
  return (
    <Center h={200} w={"100%"} bg={"light.50"} key={"VenuePageKey"}>
      <Heading color={"light.100"}>{event.name}</Heading>
    </Center>
  );
};

export default EventInfo;
