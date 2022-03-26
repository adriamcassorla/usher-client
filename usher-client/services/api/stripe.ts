
const fetchPaymentIntentClientSecret = async (amount: number) => {
  amount = amount * 100;
  try {

    const response = await fetch('https://tourn.me/usher/stripe/create-payment-intent', {
      method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      currency: 'eur',
      amount,
    }),
  });
  const {clientSecret} = await response.json();
  return clientSecret
} catch (e) {
  console.error("Payment failed, don't worry you will not be charged for any amount")
}
}

export default fetchPaymentIntentClientSecret