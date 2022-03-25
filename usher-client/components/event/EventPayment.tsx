import * as React from "react";
import { CardField, useConfirmPayment} from '@stripe/stripe-react-native';
import { Button, Divider, Heading, Text } from "native-base";
import { AsyncStorage, StyleSheet, View } from 'react-native';
import { MainStackNavType } from "../../utils/Types/navTypes";
import { generateTicket } from "../../services/api/tickets";
import fetchPaymentIntentClientSecret from "../../services/api/stripe";
type Props = {
  navigation: MainStackNavType;
  quantity: number
  onClose: () => void;
  setTicketSelected: React.Dispatch<React.SetStateAction<boolean>>;
  showId: string | null;
  eventName: string;
  price: number;
};
type BillingDetails = {email: string}

const Payment = ({ navigation, quantity, onClose, setTicketSelected, showId, eventName, price}: Props) => {
  const [card, setCard] = React.useState(false);
  const seats = quantity;
  const {confirmPayment, loading} = useConfirmPayment();

  const handlePayPress = async () => {
    console.log('paying')
    const billingDetails: BillingDetails = {
      email: 'testing@testing.com',
    };
    if(!card ) {
      return
    }
    const clientSecret = await fetchPaymentIntentClientSecret();
    console.log('client secret received', clientSecret)
    const {paymentIntent, error} = await confirmPayment(clientSecret, {
      type: 'Card',
      billingDetails,
    });
    console.log('incoming paymentIntent', paymentIntent)
    if (error) {
      console.log('Payment confirmation error', error);
    } else if (paymentIntent) {
      console.log('Success from promise', paymentIntent);
    }

    return paymentIntent
  }
  return (
      <View style={{width: '90%', flexDirection: 'column', alignItems: 'center'}}>
        <Heading fontSize="lg" color="light.500">
          Insert payment details
        </Heading>
        <Divider my="2" w={"90%"} />
        <CardField
          postalCodeEnabled={false}
          placeholder={{number: '4242 4242 4242 4242',}}
          cardStyle={{backgroundColor: '#FFFFFF',textColor: '#000000',}}
          style={styles.card}
          onCardChange={(cardDetails) => {
            console.log('cardDetails', cardDetails);
            if (cardDetails.complete === true) setCard(true);
          }}
          onFocus={(focusedField) => {
            console.log('focusField', focusedField);
          }}
        />
        <Text fontSize="md" color={"light.400"} alignSelf="center">
        You have selected {seats} seats for {eventName}
         </Text>

        <Button
          my="15px"
          alignSelf="center"
          width="50%"
          isDisabled={!card}
          colorScheme="primary"
          onPress={async () => {
            try{
              const token = await AsyncStorage.getItem('user');
              if (token) {
                const confirmedPayment = await handlePayPress();
                if (confirmedPayment) {
                  if(showId) {
                    
                    const show = await generateTicket(showId, seats);
                    if (show) {
                      navigation.navigate("Confirmation", {
                        event: show.event!.name,
                        date: show.date,
                        seats,
                      });
                      onClose();
                    }
                  }
                }
              }
            } catch (e) {
              console.error(e)
            }
          }}
          >
          {`Pay ${price * quantity} €`}
        </Button>
        <Button
          colorScheme="primary"
          variant="link"
          onPress={() => {setTicketSelected(false)}}
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
    alignSelf: 'center',
    width: '90%',
    height: 50,
    marginVertical: 30,
  }
})