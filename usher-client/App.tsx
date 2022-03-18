import React, { useState } from 'react';
import { NativeBaseProvider } from 'native-base';

import theme from './styles/theme';
import UnauthorizedHome from './content/pages/UnauthorizedHome';
import MainStack from './content/navigations/MainStack';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <NativeBaseProvider theme={theme}>
      {user ? (
        <MainStack></MainStack>
      ) : (
        <UnauthorizedHome setUser={setUser}></UnauthorizedHome>
      )}
    </NativeBaseProvider>
  );
}
