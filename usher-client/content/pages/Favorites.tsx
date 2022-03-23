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

const Favorites = ({ navigation, route }: Props) => {

  console.log(route?.params)

  return (
    <Center h={"full"} w={"full"} bgColor={"dark.50"}>
      <Text>Favorites</Text>
    </Center>
  );
};

export default Favorites;
