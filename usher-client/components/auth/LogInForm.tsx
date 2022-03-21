import * as React from "react";
import { Center, Button, Stack, Input, FormControl } from "native-base";
import { AsyncStorage } from 'react-native'
import { login, LoginForm, loginMock } from '../../utils/helpers/login'
import { GestureResponderEvent } from "react-native";

type Props = {
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setIsNewUser: React.Dispatch<React.SetStateAction<boolean>>;
};

const LogInForm = ({ setUser, setIsNewUser }: Props) => {

  const [formData, setFormData] = React.useState<LoginForm>(loginMock)
  
  const submitHandler = async (event: GestureResponderEvent) => {
    login(event, formData)
    const user = await AsyncStorage.getItem('user');
    // console.log(user);
    if (user) {
      setUser({id: '1', favorite_events: [], tickets: []})
    }
  }

  // const test = async () => {
  //   const user = await AsyncStorage.getItem('user');
  //   console.log('Current user is', user);
  // }
  
  // test();

  return (
    
    <Center w={"80%"} h={"3/4"}>
      <FormControl>
        <Stack space={"md"} w="100%" maxW="400px" mb={20}>
          <Input type="email" bg='light.100' size="lg" placeholder="Enter email" onChangeText={(value: string) => setFormData({...formData, email: value})}/>
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
