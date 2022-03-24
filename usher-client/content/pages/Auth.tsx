import * as React from "react";
const { useState } = React;
import {
  Center,
  Flex,
  Heading,
  Image,
  KeyboardAvoidingView,
  View,
} from "native-base";

import KeyboardSpacer from "react-native-keyboard-spacer";
import LogInForm from "../../components/auth/LogInForm";
import SignUpForm from "../../components/auth/SignUpForm";
import GradientProvider from "../../components/GradientProvider";

type Props = {
  setUser: (user: User | null) => void;
};

const Auth = ({ setUser }: Props) => {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <GradientProvider>
      <Flex
        w="100%"
        h="100%"
        py={"20px"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <View>
          <Image
            source={require("../../assets/usher_icon.png")}
            alt="Usher icon"
            size="xl"
            width="300px"
          />
        </View>
        {isNewUser ? (
          <SignUpForm setUser={setUser} setIsNewUser={setIsNewUser} />
        ) : (
          <LogInForm setUser={setUser} setIsNewUser={setIsNewUser} />
        )}
        <KeyboardSpacer />
      </Flex>
    </GradientProvider>
  );
};

export default Auth;
