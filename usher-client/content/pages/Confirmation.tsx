import * as React from "react";
import { useEffect } from "react";
const moment = require("moment");
import { Button, Center, Flex, Heading, Text, useToast } from "native-base";
import { MainStackParamList } from "../../utils/Types/navTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { capitalize } from "../../utils/helpers/home";
import ConfirmationGif from "../../components/ConfirmationGif";

type Props = NativeStackScreenProps<MainStackParamList, "Confirmation">;

const Confirmation = ({ navigation, route }: Props) => {
  const { event, nSeats, date } = route.params;
  const toast = useToast();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Main");
      toast.show({
        status: "success",
        title:
          "Ticket" + (nSeats > 1 ? "s" : "") + " added to your profile page.",
        mb: 8,
        mx: 5,
      });
    }, 3000);
  }, []);

  return (
    <Flex
      h={"full"}
      w={"80%"}
      ml={"10%"}
      alignItems={"center"}
      justifycontent="center"
    >
      <ConfirmationGif></ConfirmationGif>

      <Center mt={"80px"}>
        <Text bold color={"light.50"} fontSize={"3xl"}>
          Booking confirmed!
        </Text>
        <Text color={"light.100"} fontSize={"xl"} textAlign={"center"}>
          You just got {nSeats} ticket{nSeats > 1 && "s"} for:
        </Text>
        <Text
          color={"light.100"}
          fontWeight="medium"
          fontSize={"xl"}
          textAlign={"center"}
        >
          {capitalize(event)}.
        </Text>
        <Text color={"light.200"} fontSize={"xl"} textAlign={"center"}>
          See you there at {moment(Number(date)).format("HH:mm")}!
        </Text>
      </Center>

      {/* <Button
        colorScheme="primary"
        onPress={() => {
          toast.show({
            status: "success",
            title:
              "Ticket" +
              (nSeats > 1 ? "s" : "") +
              " added to your profile page.",
            mb: 40,
            mx: 5,
          });
          navigation.navigate("Main");
        }}
      >
        All done, Return Home
      </Button> */}
    </Flex>
  );
};

export default Confirmation;
