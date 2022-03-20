import * as React from "react";
import { Button, Center, Text } from "native-base";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../../utils/Types/navTypes";
type Props = NativeStackScreenProps<MainStackParamList, "Payment">;

const Payment = ({ navigation }: Props) => {
  return (
    <Center h={"full"} w={"full"}>
      <Text>Payment</Text>
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
