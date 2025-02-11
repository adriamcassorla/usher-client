import * as React from "react";
import { useEffect } from "react";
//@ts-ignore
import moment from "moment";
import { Center, Flex, Text, useToast } from "native-base";
import { MainStackParamList } from "../../utils/Types/navTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { capitalize } from "../../utils/helpers/home";
import ConfirmationGif from "../../components/Animations/ConfirmationGif";
import { getUserProfile } from "../../services/api/user";
import { useUserContext } from "../../services/contexts/UserContext";
import { useStatusContext } from "../../services/contexts/StatusContext";

type Props = NativeStackScreenProps<MainStackParamList, "Confirmation">;

const Confirmation = ({ navigation, route }: Props) => {
  const { event, seats, date } = route.params;
  const toast = useToast();
  const { populateUser } = useUserContext();
  const { changeStatus } = useStatusContext();

  useEffect(() => {
    getUserProfile()
      .then((user) => {
        if (typeof user === "string") {
          changeStatus("error", user);
        } else {
          populateUser(user);
        }
      })
      .catch((error) => changeStatus("error", error));
    setTimeout(() => {
      navigation.navigate("Main");
      toast.show({
        status: "success",
        title:
          "Ticket" + (seats > 1 ? "s" : "") + " added to your profile page.",
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
          You just got {seats} ticket{seats > 1 && "s"} for:
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
    </Flex>
  );
};

export default Confirmation;
