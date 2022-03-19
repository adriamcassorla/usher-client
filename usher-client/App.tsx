import React, { useState } from 'react';
import { NativeBaseProvider } from 'native-base';

import theme from './styles/theme';
import Auth from './content/pages/Auth';
import MainStack from './content/navigations/MainStack';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <NativeBaseProvider theme={theme}>
      {user ? (
        <MainStack></MainStack>
      ) : (
        <Auth setUser={setUser}></Auth>
      )}
    </NativeBaseProvider>
  );
}
