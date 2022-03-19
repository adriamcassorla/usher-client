import * as React from "react";
import { Center, Text } from "native-base";

import type { CompositeScreenProps } from "@react-navigation/native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { StackScreenProps } from "@react-navigation/stack";
type Props = CompositeScreenProps<
  StackScreenProps<ProfileStackParamList, "Favorites">,
  BottomTabScreenProps<HomeTabParamList>
>;

const Tickets = ({ navigation }: Props) => {
  return (
    <Center h={"full"} w={"full"}>
      <Text>Tickets</Text>
    </Center>
  );
};

export default Tickets;
