import * as React from "react";
import { Center, Button, Stack, Input, FormControl } from "native-base";
import { login, LoginForm, loginMock } from "../../utils/helpers/login";
import { focusStyle } from "../../styles/authStyles";

type Props = {
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setIsNewUser: React.Dispatch<React.SetStateAction<boolean>>;
};

const LogInForm = ({ setUser, setIsNewUser }: Props) => {
  const [formData, setFormData] = React.useState<LoginForm>(loginMock);

  const submitHandler = async () => {
    login(formData).then(setUser);
  };
  return (
    <Center w={"80%"} h={"3/4"}>
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
        variant="link"
        colorScheme="primary"
        onPress={() => {
          setIsNewUser(true);
        }}
        _pressed={{_text: {color: "light.200"}}}
      >
        New user? Sign up!
      </Button>
    </Center>
  );
};

export default LogInForm;
