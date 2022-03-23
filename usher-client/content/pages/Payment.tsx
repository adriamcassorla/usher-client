import * as React from "react";
import { useEffect } from "react";
import { Button, Flex, Text } from "native-base";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../../utils/Types/navTypes";
import { generateTicket } from "../../services/api/tickets";
import { UserContext } from "../../services/contexts/UserContext";
type Props = NativeStackScreenProps<MainStackParamList, "Payment">;

const Payment = ({ navigation, route }: Props) => {
  const { showId, nSeats } = route.params;
  const { user } = React.useContext(UserContext);
  return (
    <Flex
      h={"full"}
      w={"full"}
      bgColor={"dark.50"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text>Payment page for:</Text>
      <Text>ShowId: {showId}</Text>
      <Text>With {nSeats} number of seats:</Text>
      <Button
        colorScheme="primary"
        onPress={async () => {
          if (user) {
            const show = await generateTicket(showId, nSeats);
            if (show) {
              navigation.navigate("Confirmation", {
                event: show.event!.name,
                date: show.date,
                nSeats,
              });
            }
          }
        }}
      >
        Pay
      </Button>
    </Flex>
  );
};

export default Payment;
