import { Flex, Circle, Icon } from "native-base";
import * as React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const EventHeader = () => {
  const { top } = useSafeAreaInsets();
  return (
    <Flex
      position={"absolute"}
      top={top}
      left={0}
      w={"full"}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <Circle size={"45px"} bg={"light.50"} ml={5}>
        <Icon
          mt={1}
          size="7"
          color="primary.500"
          as={<Ionicons name={"arrow-back-outline"} />}
        />
      </Circle>
      <Circle size={"45px"} bg={"light.50"} mr={5}>
        <Icon
          mt={1}
          size="7"
          color="primary.500"
          as={<Ionicons name={"heart"} />}
        />
      </Circle>
    </Flex>
  );
};

export default EventHeader;
