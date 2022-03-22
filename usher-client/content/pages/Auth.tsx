import * as React from 'react';
const { useState } = React;
import { Center, Heading, Image } from 'native-base';

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
        <Heading mt="90px" mb="-60px">
          <Image source={require('../../assets/usher_icon.png')} alt="Usher icon" size="xl" width="300px"/>
        </Heading>
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
