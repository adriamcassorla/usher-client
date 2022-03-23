import * as React from "react";
import { useEffect } from "react";
import { Button, Center, Text } from "native-base";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../../utils/Types/navTypes";
import { generateTicket } from "../../services/api/tickets";
import { UserContext } from "../../services/contexts/UserContext";
type Props = NativeStackScreenProps<MainStackParamList, "Payment">;

const Payment = ({ navigation, route }: Props) => {
  const { showId, nSeats } = route.params;
  const { user } = React.useContext(UserContext);
  return (
    <Center h={"full"} w={"full"} bgColor={"dark.50"}>
      <Text>Payment page for:</Text>
      <Text>ShowId: {showId}</Text>
      <Text>With {nSeats} number of seats:</Text>
      <Button
        colorScheme="primary"
        onPress={async () => {
          if (user) {
            const ticket = await generateTicket(user.id, showId);
            console.log(ticket);
            navigation.navigate("Confirmation");
          }
        }}
      >
        Pay
      </Button>
    </Center>
  );
};

export default Payment;
