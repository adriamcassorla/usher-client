import * as React from 'react';
import { useState } from 'react';
import { NativeBaseProvider } from 'native-base';

import { UserProvider } from './services/contexts/UserContext';

import theme from './styles/theme';
import Auth from './content/pages/Auth';
import MainStack from './content/navigation/MainStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [user, setUser] = useState<User | null>(null);

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
