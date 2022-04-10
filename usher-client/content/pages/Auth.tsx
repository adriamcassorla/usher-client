import * as React from "react";
const { useState } = React;
import { Flex, Image, View } from "native-base";

import KeyboardSpacer from "react-native-keyboard-spacer";
import LogInForm from "../../components/auth/LogInForm";
import SignUpForm from "../../components/auth/SignUpForm";
import GradientProvider from "../../components/GradientProvider";
import { useEffect } from "react";
import { useStatusContext } from "./../../services/contexts/StatusContext";

type Props = {
  setUser: (user: UserProfile | null) => void;
};

const Auth = ({ setUser }: Props) => {
  const [isNewUser, setIsNewUser] = useState(false);
  const { changeStatus } = useStatusContext();

  useEffect(() => {
    changeStatus("loaded");
  }, []);

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
