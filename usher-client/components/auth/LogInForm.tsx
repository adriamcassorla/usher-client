import * as React from "react";
import { Center, Button, Stack, Input, FormControl } from "native-base";
import { login, LoginForm } from '../../utils/helpers/login'
import { DarkMode } from "@chakra-ui/react";
import { GestureResponderEvent } from "react-native";

type Props = {
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setIsNewUser: React.Dispatch<React.SetStateAction<boolean>>;
};

const LogInForm = ({ setUser, setIsNewUser }: Props) => {

  const [formData, setFormData] = React.useState<LoginForm>({email: '', password: ''})
  const [formErrors, setFormErrors] = React.useState<LoginForm>({email: '', password: ''});
  
  const submitHandler = (event: GestureResponderEvent) => {
    login(event, formData, setFormErrors)
  }

  return (
    
    <Center w={"80%"} h={"3/4"}>
      <FormControl>
        <Stack space={"md"} w="100%" maxW="400px" mb={20}>
          <Input type="email" bg='light.100' size="lg" placeholder="Enter email" onChangeText={(value: string) => setFormData({...formData, email: value})}/>
          {'email' in formErrors ? <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> : <FormControl.HelperText>
            Name should contain atleast 3 character.
          </FormControl.HelperText>}
          <Input type="password" bg='light.100' size="lg" placeholder="Enter password" onChangeText={(value: string) => setFormData({...formData, password: value})}/>
        </Stack>

        <Button
          variant="solid"
          colorScheme="primary"
          onPress={submitHandler}
          mb={10}
          >
          Log in
        </Button>
      </FormControl>
      <Button
        variant="link"
        colorScheme="primary"
        onPress={() => {
          setIsNewUser(true);
        }}
        >
        New user? Sign up!
      </Button>
    </Center>
  );
};

export default LogInForm;
