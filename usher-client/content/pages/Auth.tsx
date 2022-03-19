import React, {useState} from 'react';

import { Center, Text } from 'native-base';

import LogInForm from '../../components/auth/LogInForm';
import SignUpForm from '../../components/auth/SignUpForm';

const Auth = ({ setUser }) => {
  const [isNewUser, setIsNewUser] = useState(false)

  return (
    <Center h="full" w="full" bg="light.100">
      <Text>Auth</Text>
      {
        isNewUser ?
        <SignUpForm setUser={setUser} setIsNewUser={setIsNewUser}/> :
        <LogInForm setUser={setUser} setIsNewUser={setIsNewUser}/>
      }
    </Center>
  );
};

export default Auth;
