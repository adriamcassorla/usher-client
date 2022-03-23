const moment = require("moment");
import { Text, Heading, Center, Divider, HStack, Button } from "native-base";
import * as React from "react";
import { useState, useEffect } from "react";
import { MainStackNavType } from "../../utils/Types/navTypes";
import CircleButton from "../CircleButton";

type Props = {
  shows: Show[];
  seats: number;
  onClose: () => void;
  navigation: MainStackNavType;
};

const TicketSelector = ({ shows, seats, navigation, onClose }: Props) => {
  const maxTickets = seats < 5 ? seats : 5;
  const [quantity, setQuantity] = useState(1);
  const [showId, setShowId] = useState<string | null>(null);

  useEffect(() => {
    if (shows.length === 1) setShowId(shows[0].id!);
  }, []);

  const addOne = () => {
    if (quantity < maxTickets) setQuantity((prev) => prev + 1);
  };
  const removeOne = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };
  return (
    <Center w={"full"}>
      <Heading fontSize="lg" color="light.500">
        You are almost there!
      </Heading>
      <Divider my="2" w={"90%"} />
      <Text fontSize="md" my={5} color={"light.400"}>
        Select show time:
      </Text>
      <HStack>
        {shows.map((show) => (
          <Button
            key={show.id}
            mx={5}
            rounded={20}
            colorScheme={show.id === showId ? "primary" : "light"}
            variant={show.id === showId ? "solid" : "subtle"}
            onPress={() => setShowId(show.id!)}
          >
            {moment(Number(show.date)).format("HH:mm")}
          </Button>
        ))}
      </HStack>
      <Text fontSize="md" mt={5} color={"light.400"}>
        How many tickets do you need?
      </Text>
      <HStack mt={5} w={"60%"} justifyContent={"space-between"}>
        <CircleButton
          bgCol={"primary.400"}
          pressedCol={"primary.300"}
          icon={"remove"}
          onPress={removeOne}
          isDisabled={quantity === 1}
        ></CircleButton>
        <Heading size={"2xl"} color={"dark.200"}>
          {quantity}
        </Heading>
        <CircleButton
          bgCol={"primary.400"}
          pressedCol={"primary.300"}
          icon={"add"}
          onPress={addOne}
          isDisabled={quantity === maxTickets}
        ></CircleButton>
      </HStack>
      <Button
        mx={5}
        mt={16}
        rounded={20}
        onPress={() => {
          if (showId) {
            onClose();
            navigation.navigate("Payment", { showId, nSeats: quantity });
          } else {
            console.log("a show must be selected before paying");
          }
        }}
      >
        Payment
      </Button>
    </Center>
  );
};

export default TicketSelector;
