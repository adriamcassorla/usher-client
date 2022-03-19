import { Text } from "react-native";
import * as React from "react";

import { Center, Flex } from "native-base";

import Carousel from "react-native-snap-carousel";
import type { StackNavigationProp } from "@react-navigation/stack";
type MainStackNavType = StackNavigationProp<MainStackParamList>;
import { useNavigation } from "@react-navigation/native";
type Props = {
  topEvents: EventType[];
};

const Highlights = ({ topEvents }: Props) => {
  const navigation = useNavigation<MainStackNavType>();
  const _renderItem = ({ item }) => {
    return (
      <Center bg={"primary.100"} w={200} h={200} zIndex={2} key={item}>
        {item}
      </Center>
    );
  };

  return (
    <Center h={"200"} w={"full"} pt={12}>
      <Carousel
        style={{ borderColor: "green", borderWidth: 5, borderStyle: "solid" }}
        sliderWidth={200}
        itemWidth={200}
        data={[1, 2, 3, 4, 5]}
        renderItem={_renderItem}
        horizontal={true}
      />
    </Center>
  );
};

export default Highlights;
