import * as React from "react";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import { Button, Divider, Heading, Text } from "native-base";
import { AsyncStorage, StyleSheet, View } from "react-native";
import { MainStackNavType } from "../../utils/Types/navTypes";
import { generateTicket } from "../../services/api/tickets";
import fetchPaymentIntentClientSecret from "../../services/api/stripe";
import { useState } from "react";
import { useStatusContext } from "../../services/contexts/StatusContext";
type Props = {
  navigation: MainStackNavType;
  quantity: number;
  onClose: () => void;
  setTicketSelected: React.Dispatch<React.SetStateAction<boolean>>;
  showId: string | null;
  eventName: string;
  price: number;
  email: string | undefined;
};
type BillingDetails = { email: string };

const Payment = ({
  navigation,
  quantity,
  onClose,
  setTicketSelected,
  showId,
  eventName,
  price,
  email,
}: Props) => {
  const [card, setCard] = useState(false);
  const seats = quantity;
  const { confirmPayment, loading } = useConfirmPayment();
  const [isPaying, setIsPaying] = useState(false);
  const { changeStatus } = useStatusContext();
  const handlePress = async () => {
    try {
      const token = await AsyncStorage.getItem("user");
      if (token) {
        setIsPaying(true);
        const confirmedPayment = await handlePay();
        if (confirmedPayment) {
          if (showId) {
            const show = await generateTicket(showId, seats);
            if (typeof show !== "string") {
              navigation.navigate("Confirmation", {
                event: show.event!.name,
                date: show.date,
                seats,
              });
              onClose();
            } else {
              changeStatus("error", show);
            }
          }
        }
      }
    } catch (e) {
      changeStatus("error", "Error while trying to process the payment");
      setIsPaying(false);
    }
  };
  const handlePay = async () => {
    if (email) {
      const billingDetails: BillingDetails = {
        email,
      };
      if (!card) {
        return;
      }
      const amount = price * seats;
      try {
        const clientSecret = await fetchPaymentIntentClientSecret(amount);
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails,
        });
        if (error) {
          changeStatus("error", "Error trying to process the payment");
          return;
        } else if (paymentIntent) {
          return paymentIntent;
        }
      } catch (e) {
        changeStatus("error", "Error trying to process the payment");
      }
    }
  };
  return (
    <View
      style={{ width: "105%", flexDirection: "column", alignItems: "center" }}
    >
      <Heading fontSize="lg" color="light.500">
        Insert payment details
      </Heading>
      <Divider my="2" w={"90%"} />
      <CardField
        postalCodeEnabled={false}
        placeholder={{ number: "4242 4242 4242 4242" }}
        cardStyle={{ backgroundColor: "#FFFFFF", textColor: "#93101C" }}
        style={styles.card}
        onCardChange={(cardDetails) => {
          if (cardDetails.complete === true) setCard(true);
          if (card === true && cardDetails.complete === false) setCard(false);
        }}
      />
      <Text fontSize="md" color={"light.400"} alignSelf="center" width="80%">
        You have selected {seats} seats for {eventName}
      </Text>
      <Button
        my="15px"
        alignSelf="center"
        width="50%"
        colorScheme="primary"
        isDisabled={!card}
        isLoading={isPaying}
        isLoadingText="Processing payment"
        _loading={{
          bg: "primary.500",
          opacity: 0.85,
          color: "light.50",
        }}
        _disabled={{
          bg: "primary.100",
        }}
        onPress={handlePress}
      >
        {`Pay ${price * quantity} €`}
      </Button>
      <Button
        colorScheme="primary"
        variant="link"
        onPress={() => {
          setTicketSelected(false);
        }}
        _pressed={{ _text: { color: "light.200" } }}
      >
        Back to tickets selection
      </Button>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    width: "90%",
    height: 50,
    marginVertical: 30,
  },
});
