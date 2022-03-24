import { Dimensions } from "react-native";
import { Center, Flex, PresenceTransition } from "native-base";
import * as React from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MapEventList = ({ venueId }: { venueId: string | null }) => {
  const tabBarHeight = useBottomTabBarHeight();
  const { bottom } = useSafeAreaInsets();
  const height = 150;
  const top = Dimensions.get("screen").height - height - tabBarHeight - bottom;
  return (
    <PresenceTransition
      visible={venueId ? true : false}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 100,
        },
      }}
    >
      <Flex
        w="full"
        top={`${top}px`}
        h={"150px"}
        justifyContent={"center"}
        direction="column"
      >
        <Center
          h={"150px"}
          w={"full"}
          bg="light.50"
          rounded="md"
          _text={{
            color: "dark.50",
          }}
        >
          Hola
        </Center>
      </Flex>
    </PresenceTransition>
  );
};

export default MapEventList;
