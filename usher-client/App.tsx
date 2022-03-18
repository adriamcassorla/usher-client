import React from 'react';
import {
  Text,
  Center,
  NativeBaseProvider,
  extendTheme,
  Button,
} from 'native-base';

import theme from './styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Center w="full" h="full">
        <Button color={'primary.500'}>
          <Text>This is Usher</Text>
        </Button>
      </Center>
    </NativeBaseProvider>
  );
}
