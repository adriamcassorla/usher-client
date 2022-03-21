import { Center, Heading } from "native-base";
import * as React from "react";

const VenueInfo = ({ venue }: { venue: Venue }) => {
  return (
    <Center h={200} w={"100%"} bg={"light.50"} key={"VenuePageKey"}>
      <Heading color={"light.100"}>{venue.name}</Heading>
    </Center>
  );
};

export default VenueInfo;
