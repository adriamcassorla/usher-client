import * as React from "react";
import { Button, Center, Text } from "native-base";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../../utils/Types/navTypes";
type Props = NativeStackScreenProps<MainStackParamList, "Payment">;

const Payment = ({ navigation, route }: Props) => {
  const { showId, nSeats } = route.params;
  return (
    <Center h={"full"} w={"full"} bgColor={"dark.50"}>
      <Text>Payment page for:</Text>
      <Text>ShowId: {showId}</Text>
      <Text>With {nSeats} number of seats:</Text>
      <Button
        colorScheme="primary"
        onPress={() => {
          navigation.navigate("Confirmation");
        }}
      >
        Pay
      </Button>
    </Center>
  );
};

export default Payment;
