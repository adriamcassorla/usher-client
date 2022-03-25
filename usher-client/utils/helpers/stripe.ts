// import fetchPaymentIntentClientSecret from "../../services/api/stripe";


// const handlePay = async (confirmPayment) => {
  
//   const billingDetails: BillingDetails = {
//     email: 'testing@testing.com',
//   };

//   if(!card ) {
//     return
//   }

//   const clientSecret = await fetchPaymentIntentClientSecret();
//   console.log('client secret received', clientSecret)
//   const {paymentIntent, error} = await confirmPayment(clientSecret, {
//     type: 'Card',
//     billingDetails,
//   });

//   if (error) {
//     console.log('Payment confirmation error', error);
//   } else if (paymentIntent) {
//     console.log('Success from promise', paymentIntent);
//   }

//   return <View />
// }

// export default handlePay