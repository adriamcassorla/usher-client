import { View, Text } from 'react-native';
import React from 'react';
import { Center, Button, Input, Stack } from 'native-base';

const SignUpForm = ({ setUser, setIsNewUser }) => {
  return (
    <Center w={'80%'} h={'3/4'}>
      <Stack space={'md'} w="100%" maxW="400px" mb={20}>
        <Input size="lg" placeholder="Enter email" />
        <Input size="lg" placeholder="Repeat email" />
        <Input size="lg" placeholder="Enter password" />
        <Input size="lg" placeholder="Repeat password" />
      </Stack>

      <Button
        variant="solid"
        colorScheme="primary"
        onPress={() => {
          setUser(true);
        }}
        mb={10}
      >
        Sign up
      </Button>
      <Button
        variant='link'
        colorScheme="primary"
        onPress={() => {
          setIsNewUser(false)
        }}
      >
        Already have an account? Log in here!
      </Button>
    </Center>
  );
};

export default SignUpForm;
