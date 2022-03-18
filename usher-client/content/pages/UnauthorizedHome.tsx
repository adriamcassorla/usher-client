import { View, Text } from 'react-native';
import React, {useState} from 'react';

import { Center, Button } from 'native-base';
import LogInForm from '../../components/unauthorizedHome/LogInForm';
import SignUpForm from '../../components/unauthorizedHome/SignUpForm';

const UnauthorizedHome = ({ setUser }) => {
  const [isNewUser, setIsNewUser] = useState(false)

  return (
    <Center h="full" w="full" bg="light.100">
      <Text>UnauthorizedHome</Text>
      {
        isNewUser ?
        <SignUpForm setUser={setUser} setIsNewUser={setIsNewUser}/> :
        <LogInForm setUser={setUser} setIsNewUser={setIsNewUser}/>
      }
    </Center>
  );
};

export default UnauthorizedHome;
