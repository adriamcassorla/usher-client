import * as React from "react";
import { NativeBaseProvider } from "native-base";
import { StripeProvider } from '@stripe/stripe-react-native';
import { UserProvider } from "./services/contexts/UserContext";
import { initStripe } from '@stripe/stripe-react-native';

import theme from "./styles/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Content from "./content";

export default function App() {

  React.useEffect(() => {
    initStripe({
      publishableKey: "pk_test_51KgrhQLqoAr5l9cwCqC9ZvVhuT6aU7XT5tGYNo1fUI1jcJQ5lN7YP6JP7FEPx1zeOdZ1dIp5AM8UM2efBgSZyDFm00SCEdEK5b"
    })
  }, [])

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
          <UserProvider>
            <Content></Content>
          </UserProvider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
