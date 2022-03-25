import * as React from "react";
import { NativeBaseProvider, View } from "native-base";
import { UserProvider } from "./services/contexts/UserContext";
import theme from "./styles/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Content from "./content";
import { StatusProvider } from "./services/contexts/StatusContext";

export default function App() {
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
