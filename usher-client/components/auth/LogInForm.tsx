import * as React from "react";
import { Button, Stack, Input, FormControl, VStack } from "native-base";
import { login, LoginForm, loginMock } from "../../utils/helpers/login";
import { focusStyle } from "../../styles/authStyles";
import { useState } from "react";
import { useStatusContext } from "./../../services/contexts/StatusContext";

type Props = {
  setUser: (user: UserProfile | null) => void;
  setIsNewUser: React.Dispatch<React.SetStateAction<boolean>>;
};

const LogInForm = ({ setUser, setIsNewUser }: Props) => {
  const [formData, setFormData] = useState<LoginForm>(loginMock);
  const { changeStatus } = useStatusContext();

  const submitHandler = () => {
    changeStatus("loading");
    login(formData)
      .then((user) => {
        if (typeof user === "string") {
          changeStatus("error", user);
        } else {
          setUser(user);
        }
      })
      .catch((error) => changeStatus("error", error));
  };
  return (
    <VStack w={"80%"} justifyContent={"center"}>
      <FormControl>
        <Stack space={"md"} w="100%" maxW="400px" mb={20}>
          <Input
            type="email"
            color="light.100"
            bg="transparent"
            borderColor="transparent"
            borderBottomColor="light.400"
            size="xl"
            placeholder="Enter email"
            onChangeText={(value: string) =>
              setFormData({ ...formData, email: value })
            }
            _focus={focusStyle}
          />
          <Input
            type="password"
            color="light.100"
            bg="transparent"
            borderColor="transparent"
            borderBottomColor="light.100"
            size="xl"
            placeholder="Enter password"
            onChangeText={(value: string) =>
              setFormData({ ...formData, password: value })
            }
            _focus={focusStyle}
          />
        </Stack>

        <Button
          size="lg"
          variant="solid"
          colorScheme="primary"
          onPress={submitHandler}
          mt="-30px"
          mb={5}
        >
          Log in
        </Button>
      </FormControl>
      <Button
        size="lg"
        variant="outlined"
        colorScheme="primary"
        onPress={() => {
          setIsNewUser(true);
        }}
        _pressed={{ _text: { color: "light.200" } }}
      >
        New user? Sign up!
      </Button>
    </VStack>
  );
};

export default LogInForm;
