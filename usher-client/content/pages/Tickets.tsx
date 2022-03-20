import * as React from "react";
import { Center, Text } from "native-base";

import type { CompositeScreenProps } from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";
import {
  BottomTabScreenType,
  ProfileStackParamList,
} from "../../utils/Types/navTypes";
type Props = CompositeScreenProps<
  StackScreenProps<ProfileStackParamList, "Favorites">,
  BottomTabScreenType
>;

const Tickets = ({ navigation }: Props) => {
  return (
    <Center h={"full"} w={"full"} bgColor={"dark.50"}>
      <Text>Tickets</Text>
    </Center>
  );
};

export default Tickets;
