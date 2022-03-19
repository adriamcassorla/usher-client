import React, { useEffect, useState } from 'react';
import { NativeBaseProvider } from 'native-base';

import theme from './styles/theme';
import Auth from './content/pages/Auth';
import MainStack from './content/navigations/MainStack';
import getCityEvents from './services/api/getCityEvents';

export default function App() {
  const [user, setUser] = useState(null);

  //! ONLY FOR DEBUGGING
  useEffect(()=>getCityEvents('Barcelona').then(console.log), [])

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
