import * as React from 'react';
const { useState } = React;
import { Center, Heading, Text } from 'native-base';

import LogInForm from '../../components/auth/LogInForm';
import SignUpForm from '../../components/auth/SignUpForm';
import GradientProvider from '../../components/GradientProvider';

type Props = {
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const Auth = ({ setUser }: Props) => {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <GradientProvider>
      <Center h="full" w="full">
        <Heading>Welcome to Usher!</Heading>
        {isNewUser ? (
          <SignUpForm setUser={setUser} setIsNewUser={setIsNewUser} />
        ) : (
          <LogInForm setUser={setUser} setIsNewUser={setIsNewUser} />
        )}
      </Center>
    </GradientProvider>
  );
};

export default Auth;
