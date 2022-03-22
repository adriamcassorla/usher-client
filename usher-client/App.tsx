import * as React from "react";
import { useState } from "react";
import { NativeBaseProvider } from "native-base";

import { UserContext, UserProvider } from "./services/contexts/UserContext";

import theme from "./styles/theme";
import Auth from "./content/pages/Auth";
import MainStack from "./content/navigation/MainStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getLastUser } from "./utils/helpers/login";
import { convertAbsoluteToRem } from "native-base/lib/typescript/theme/tools";

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<"loading" | "loaded">("loading");

  React.useEffect(() => {
    getLastUser().then((user) => {
      setUser(user);
      setStatus("loaded");
    });
  }, []);

  if (status === "loading") return null;
  return (
    <UserProvider>
      <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>
          {user ? <MainStack></MainStack> : <Auth setUser={setUser}></Auth>}
        </NativeBaseProvider>
      </SafeAreaProvider>
    </UserProvider>
  );
}
