import { Text, Container, Heading, Box } from "native-base";
import * as React from "react";
import EventStats from "./EventStats";

const EventInfo = ({ event }: { event: EventType }) => {
  return (
    <Container w={"90%"} ml={"5%"} mt={"5%"}>
      <Heading color={"primary.300"} size={"sm"} mb={1}>
        About:
      </Heading>
      <Text color={"light.800"}>{event.description}</Text>
      <EventStats event={event} />
    </Container>
  );
};

export default EventInfo;
