import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Center,
  Flex,
  Heading,
  Text,
  VStack,
  Actionsheet,
  useDisclose,
} from "native-base";
import * as React from "react";
import { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MainStackNavType } from "../../utils/Types/navTypes";
import EventPayment from "./EventPayment";
import TicketSelector from "./TicketSelector";

const EventFooter = ({ price, shows, eventName }: { price: number; shows: Show[]; eventName: string; }) => {
  let { bottom } = useSafeAreaInsets();
  bottom = bottom > 22 ? bottom : 22;
  const height = 60 + bottom;
  const top = Dimensions.get("screen").height - height;
  const { isOpen, onOpen, onClose } = useDisclose();
  const navigation = useNavigation<MainStackNavType>();
  const [seats, setSeats] = useState(0);
  const [ticketSelected, setTicketSelected] = useState(false);
  const [showId, setShowId] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    let leftSeats = 0;
    shows.forEach((show) => {
      leftSeats += show.available_seats || 0;
    });
    setSeats(leftSeats);
  }, []);

  return (
    <Center
      position={"absolute"}
      top={top}
      w={"full"}
      h={height}
      bg={"light.50"}
      pb={`${bottom}px`}
      shadow={5}
    >
      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={10}
        pt={3}
        w={"full"}
      >
        <VStack alignItems={"center"}>
          <Heading size={"xl"} color={"dark.200"}>
            {price}€
          </Heading>
          <Text color={"primary.400"}>{seats} seats left!</Text>
        </VStack>
        <Button rounded={40} shadow={5} w={"60%"} onPress={onOpen}>
          <Text color={"light.50"} fontSize={"lg"} fontWeight={"700"}>
            Take your seats
          </Text>
        </Button>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            { ticketSelected ?
              <EventPayment
              setTicketSelected={setTicketSelected}
              showId={showId}
              onClose={onClose}
              navigation={navigation}
              quantity={quantity}
              eventName={eventName}
              price={price}
              ></EventPayment>
            :
              <TicketSelector
              shows={shows}
              seats={seats}
              navigation={navigation}
              onClose={onClose}
              setTicketSelected={setTicketSelected}
              setShowId={setShowId}
              showId={showId}
              quantity={quantity}
              setQuantity={setQuantity}
              ></TicketSelector>
            }
          </Actionsheet.Content>
        </Actionsheet>
      </Flex>
    </Center>
  );
};

export default EventFooter;
