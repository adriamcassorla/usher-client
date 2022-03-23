import * as React from "react";
const moment = require("moment");
import { Button, Flex, Heading, Text, useToast } from "native-base";
import { MainStackParamList } from "../../utils/Types/navTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { capitalize } from "../../utils/helpers/home";

type Props = NativeStackScreenProps<MainStackParamList, "Confirmation">;

const Confirmation = ({ navigation, route }: Props) => {
  const { event, nSeats, date } = route.params;
  const toast = useToast();
  return (
    <Flex
      h={"full"}
      w={"80%"}
      ml={"10%"}
      bgColor={"dark.50"}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <Heading color={"light.50"} fontSize={"5xl"}>
        Congrats!!!
      </Heading>
      <Text color={"light.100"} fontSize={"3xl"} textAlign={"center"}>
        You just got {nSeats} tickets for {capitalize(event)}.
      </Text>
      <Text color={"light.200"} fontSize={"2xl"} textAlign={"center"}>
        See you there at {moment(Number(date)).format("HH:mm")}!
      </Text>
      <Button
        colorScheme="primary"
        onPress={() => {
          toast.show({
            status: "success",
            title:
              "Ticket" +
              (nSeats > 1 ? "s" : "") +
              " added to your profile page.",
            mb: "45px",
            mx: 5,
          });
          navigation.navigate("Main");
        }}
      >
        All done, Return Home
      </Button>
    </Flex>
  );
};

export default Confirmation;
