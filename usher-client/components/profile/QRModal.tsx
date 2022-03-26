import * as React from "react";
import { BlurView } from "expo-blur";
import { Box, Center, Flex, Heading, Text, useToken } from "native-base";
import QRCode from "react-native-qrcode-svg";
import TicketBackground from "./TicketBackground";
//@ts-ignore
import moment from "moment";

const QRModal = ({ modalTicket }: { modalTicket: Ticket }) => {
  const [light50] = useToken("colors", ["light.50"]);
  return (
    <BlurView
      style={{
        height: "100%",
        width: "100%",
      }}
      intensity={95}
    >
      <Center ml={1} w={"100%"} h={"100%"}>
        <Box w={"94%"} h={"90%"} position={"absolute"}>
          <TicketBackground></TicketBackground>
        </Box>
        <Flex
          w={"94%"}
          h={"90%"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Flex justifyContent={"space-between"} h={"30%"}>
            <Box w={"80%"}>
              <Heading
                fontSize={"2xl"}
                color={"light.200"}
                textAlign={"center"}
              >
                {modalTicket.show.event?.name}
              </Heading>
            </Box>
            <Box alignItems={"center"}>
              <Text fontSize={"4xl"} color={"light.500"}>
                {modalTicket.show.event?.venue.name}
              </Text>
              <Text fontSize={"xl"} color={"light.100"}>
                {moment.unix(+modalTicket.show.date / 1000).fromNow()}
              </Text>
            </Box>
          </Flex>
          <Box>
            <QRCode
              value={modalTicket.id}
              size={200}
              backgroundColor={"none"}
              color={light50}
            />
          </Box>
        </Flex>
      </Center>
    </BlurView>
  );
};

export default QRModal;
