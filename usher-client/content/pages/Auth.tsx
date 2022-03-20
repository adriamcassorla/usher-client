import * as React from "react";
const { useState } = React;
import { Center, Text } from "native-base";

import LogInForm from "../../components/auth/LogInForm";
import SignUpForm from "../../components/auth/SignUpForm";

type Props = {
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const Auth = ({ setUser }: Props) => {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <Center h="full" w="full" bg="light.100">
      <Text>Auth</Text>
      {isNewUser ? (
        <SignUpForm setUser={setUser} setIsNewUser={setIsNewUser} />
      ) : (
        <LogInForm setUser={setUser} setIsNewUser={setIsNewUser} />
      )}
    </Center>
  );
};

export default Auth;
