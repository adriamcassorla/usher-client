import * as React from "react";
import { Button, Center, Text } from "native-base";
import type { CompositeScreenProps } from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";
import {
  BottomTabScreenType,
  MainStackParamList,
} from "../../utils/Types/navTypes";

type Props = CompositeScreenProps<
  BottomTabScreenType,
  StackScreenProps<MainStackParamList, "Confirmation">
>;

const Confirmation = ({ navigation }: Props) => {
  return (
    <Center h={"full"} w={"full"} bgColor={"dark.50"}>
      <Text>Confirmation</Text>
      <Button
        colorScheme="primary"
        onPress={() => {
          navigation.navigate("Main");
        }}
      >
        All done! Return Home!
      </Button>
    </Center>
  );
};

export default Confirmation;
