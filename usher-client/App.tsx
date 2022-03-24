import * as React from "react";
import { NativeBaseProvider } from "native-base";
import { StripeProvider } from '@stripe/stripe-react-native';
import { UserProvider } from "./services/contexts/UserContext";

import theme from "./styles/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Content from "./content";

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <StripeProvider 
          publishableKey="pk_test_51KgrhQLqoAr5l9cwCqC9ZvVhuT6aU7XT5tGYNo1fUI1jcJQ5lN7YP6JP7FEPx1zeOdZ1dIp5AM8UM2efBgSZyDFm00SCEdEK5b"
          >
          <UserProvider>
            <Content></Content>
          </UserProvider>
        </StripeProvider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
