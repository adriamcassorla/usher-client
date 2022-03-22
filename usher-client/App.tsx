import * as React from "react";
import { NativeBaseProvider } from "native-base";

import { UserProvider } from "./services/contexts/UserContext";

import theme from "./styles/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Content from "./content";

export default function App() {
  return (
    <UserProvider>
      <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>
          <Content></Content>
        </NativeBaseProvider>
      </SafeAreaProvider>
    </UserProvider>
  );
}
