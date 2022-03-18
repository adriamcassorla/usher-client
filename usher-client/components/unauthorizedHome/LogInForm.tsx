import { View, Text } from 'react-native';
import React from 'react';
import { Center, Button, Stack, Input } from 'native-base';

const LogInForm = ({setUser, setIsNewUser}) => {
  return (
    <Center w={'80%'} h={'3/4'}>
      <Stack space={'md'} w="100%" maxW="400px" mb={20}>
        <Input size="lg" placeholder="Enter email" />
        <Input size="lg" placeholder="Enter password" />
      </Stack>

      <Button
        variant='solid'
        colorScheme="primary"
        onPress={() => {
          setUser(true)
        }}
        mb={10}
      >
        Log in
      </Button>
      <Button
        variant='link'
        colorScheme="primary"
        onPress={() => {
          setIsNewUser(true)
        }}
      >
        New user? Sign up here!
      </Button>
    </Center>
  );
};

export default LogInForm;
