import * as React from "react";
import { Button, Center, Text } from "native-base";
import type { CompositeScreenProps } from "@react-navigation/native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { StackScreenProps } from "@react-navigation/stack";

type Props = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList>,
  StackScreenProps<MainStackParamList, "Confirmation">
>;

const Confirmation = ({ navigation }: Props) => {
  return (
    <Center h={"full"} w={"full"}>
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
