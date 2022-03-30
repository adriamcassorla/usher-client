import * as React from "react";
import { BlurView } from "expo-blur";
import { Box, Center, Flex, Heading, Text, useToken } from "native-base";
import QRCode from "react-native-qrcode-svg";
import TicketBackground from "./TicketBackground";
//@ts-ignore
import moment from "moment";
import { useEffect, useState } from "react";
import { getTicketUsage } from "../../services/api/tickets";
import { Dimensions } from "react-native";
import DarkCheck from "../Animations/DarkCheck";

const wWidth = Dimensions.get("window").width;
const wHeight = Dimensions.get("window").height;

const QRModal = ({ modalTicket }: { modalTicket: Ticket }) => {
  const [light50] = useToken("colors", ["light.50"]);
  const [isUsed, setIsUsed] = useState(false);

  useEffect(() => {
    const usageInterval = setInterval(async () => {
      const isUsedNow = await getTicketUsage(modalTicket.id);
      if (typeof isUsedNow === "string") {
        clearInterval(usageInterval);
        return;
      }
      if (isUsedNow !== isUsed) {
        setIsUsed(isUsedNow);
      }
    }, 400);

    return () => clearInterval(usageInterval);
  }, []);

  useEffect(() => {
    console.log(isUsed);
    console.log(modalTicket.id);
    if (isUsed) {
      // Get out of here after the animation
    }
  }, [isUsed]);

  return (
    <BlurView
      style={{
        height: "100%",
        width: "100%",
      }}
      intensity={95}
    >
      <Center mt={2} w={"100%"} h={"100%"}>
        <Box
          w={`${wWidth * 0.9}px`}
          h={`${wHeight * 0.9}px`}
          top={`${wHeight * 0.05}px`}
          left={`${wWidth * 0.05}px`}
          position={"absolute"}
        >
          <TicketBackground
            width={wWidth * 0.9}
            height={wHeight * 0.9}
          ></TicketBackground>
        </Box>
        <Flex
          w={"90%"}
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
            {isUsed ? (
              <DarkCheck></DarkCheck>
            ) : (
              <QRCode
                value={modalTicket.id}
                size={200}
                backgroundColor={"none"}
                color={light50}
              />
            )}
          </Box>
        </Flex>
      </Center>
    </BlurView>
  );
};

export default QRModal;
