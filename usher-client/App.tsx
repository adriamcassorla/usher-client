import * as React from "react";
import { useEffect } from "react";
import { NativeBaseProvider, View } from "native-base";
import { UserProvider } from "./services/contexts/UserContext";
import { initStripe } from "@stripe/stripe-react-native";
//@ts-ignore
import { REACT_APP_STRIPE_PUBLISHABLE_KEY } from "react-native-dotenv";
import theme from "./styles/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Content from "./content";
import { StatusProvider } from "./services/contexts/StatusContext";

export default function App() {
  useEffect(() => {
    initStripe({
      publishableKey: REACT_APP_STRIPE_PUBLISHABLE_KEY as string,
    });
  }, []);

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <UserProvider>
          <StatusProvider>
            <View w={"100%"} h={"100%"} bg={"dark.50"}>
              <Content></Content>
            </View>
          </StatusProvider>
        </UserProvider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
