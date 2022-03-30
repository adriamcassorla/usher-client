import * as React from 'react';
import { useEffect } from 'react';
import { NativeBaseProvider, View } from 'native-base';
import { UserProvider } from './services/contexts/UserContext';
import { initStripe } from '@stripe/stripe-react-native';
//@ts-ignore
import { REACT_APP_STRIPE_PUBLISHABLE_KEY } from 'react-native-dotenv';
import theme from './styles/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Content from './content';
import { StatusProvider } from './services/contexts/StatusContext';

import {
  useFonts,
  Jost_300Light,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold,
  Jost_300Light_Italic,
  Jost_400Regular_Italic,
  Jost_500Medium_Italic,
  Jost_600SemiBold_Italic,
  Jost_700Bold_Italic,
} from '@expo-google-fonts/jost';

export default function App() {
  useEffect(() => {
    initStripe({
      publishableKey: REACT_APP_STRIPE_PUBLISHABLE_KEY as string,
    });
  }, []);

  const [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Jost_700Bold,
    Jost_300Light_Italic,
    Jost_400Regular_Italic,
    Jost_500Medium_Italic,
    Jost_600SemiBold_Italic,
    Jost_700Bold_Italic,
  });

  return (
    <SafeAreaProvider>
      <NativeBaseProvider
        theme={theme}
        config={{ suppressColorAccessibilityWarning: true }}
      >
        <UserProvider>
          <StatusProvider>
            <View w={'100%'} h={'100%'} bg={'dark.50'}>
              {fontsLoaded ? <Content></Content> : null}
            </View>
          </StatusProvider>
        </UserProvider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
