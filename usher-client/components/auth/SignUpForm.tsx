import * as React from "react";
import { Center, Button, Input, Stack } from "native-base";
import { signup, signupMock, SignupForm } from "../../utils/helpers/signup";
import { AsyncStorage, GestureResponderEvent } from "react-native";

type Props = {
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setIsNewUser: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignUpForm = ({ setUser, setIsNewUser }: Props) => {
  const [formData, setFormData] = React.useState<SignupForm>(signupMock);

  const submitHandler = async () => {
    signup(formData).then(setUser);
  };
  return (
    <Center w={"80%"} h={"3/4"}>
      <Stack space={"md"} w="100%" maxW="400px" mb={20}>
        <Input
          size="lg"
          bg="light.100"
          placeholder="First Name"
          onChangeText={(value: string) =>
            setFormData({ ...formData, firstName: value })
          }
        />
        <Input
          size="lg"
          bg="light.100"
          placeholder="Last Name"
          onChangeText={(value: string) =>
            setFormData({ ...formData, lastName: value })
          }
        />
        <Input
          type="email"
          size="lg"
          bg="light.100"
          placeholder="Enter email"
          onChangeText={(value: string) =>
            setFormData({ ...formData, email: value })
          }
        />
        <Input
          type="password"
          size="lg"
          bg="light.100"
          placeholder="Enter password"
          onChangeText={(value: string) =>
            setFormData({ ...formData, password: value })
          }
        />
      </Stack>

      <Button variant="solid" colorScheme="primary" onPress={submitHandler}>
        Sign up
      </Button>
      <Button
        variant="link"
        colorScheme="primary"
        onPress={() => {
          setIsNewUser(false);
        }}
      >
        Already have an account? Log in!
      </Button>
    </Center>
  );
};

export default SignUpForm;
