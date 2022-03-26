import * as React from "react";
import {
  HStack,
  Text,
  Image,
  Center,
  Divider,
  Box,
  ZStack,
  useToken,
} from "native-base";
import { capitalize } from "../../utils/helpers/home";

import QRCode from "react-native-qrcode-svg";
const QRlogo = require("../../assets/qrcodelogo.png");
//@ts-ignore
import moment from "moment";
import { isValid } from "../../utils/helpers/tickets";
import { Pressable } from "react-native";

const TicketCard = ({ ticket }: { ticket: Ticket }) => {
  const isValidTicket = isValid(ticket);
  const [light100, dark50] = useToken("colors", ["light.100", "dark.50"]);
  return (
    <HStack
      borderRadius={4}
      overflow="hidden"
      alignItems="center"
      my="2"
      bg={!isValidTicket ? "dark.700:alpha.30" : "dark.700:alpha.60"}
      w="330"
      h="120"
    >
      <Center w={"90px"} h={"full"} p={1}>
        <ZStack w={"full"} h={"full"}>
          <Image
            src={ticket.show.event?.poster}
            alt={`${ticket.show.event?.name} poster`}
            borderRadius={4}
            overflow="hidden"
            w={"full"}
            h={"full"}
          />
          {!isValidTicket ? (
            <Box w={"full"} h={"full"} bg="dark.50" opacity={0.7} />
          ) : null}
        </ZStack>
      </Center>
      <Divider
        mx="2"
        h="90%"
        orientation="vertical"
        bg={!isValidTicket ? "light.400" : "dark.100"}
      />
      <Box p={1} w="90%" h="full" flex={1} justifyContent="center">
        <Text
          bold
          fontSize="xl"
          color={!isValidTicket ? "light.400" : "dark.50"}
        >
          {capitalize(ticket.show.event.name)}
        </Text>
        <Text fontSize="md" color={!isValidTicket ? "light.400" : "dark.100"}>
          {capitalize(ticket.show.event.venue?.name)}
        </Text>
        <Text
          fontWeight="medium"
          fontSize="md"
          color={!isValidTicket ? "light.400" : "dark.50"}
        >
          {moment(Number(ticket.show.date)).format("MMM Do YY HH:mm")}
        </Text>
      </Box>
    </HStack>
  );
};

export default TicketCard;
