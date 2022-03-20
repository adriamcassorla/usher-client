import * as React from "react";
import { useState } from "react";
import { NativeBaseProvider } from "native-base";

import theme from "./styles/theme";
import Auth from "./content/pages/Auth";
import MainStack from "./content/navigation/MainStack";

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <NativeBaseProvider theme={theme}>
      {user ? <MainStack></MainStack> : <Auth setUser={setUser}></Auth>}
    </NativeBaseProvider>
  );
}
