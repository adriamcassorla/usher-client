import * as React from "react";
import { Center, Button, Stack, Input } from "native-base";

type Props = {
  setUser: (user: User | null) => void;
  setIsNewUser: React.Dispatch<React.SetStateAction<boolean>>;
};

const LogInForm = ({ setUser, setIsNewUser }: Props) => {
  return (
    <Center w={"80%"} h={"3/4"}>
      <Stack space={"md"} w="100%" maxW="400px" mb={20}>
        <Input size="lg" placeholder="Enter email" />
        <Input size="lg" placeholder="Enter password" />
      </Stack>

      <Button
        variant="solid"
        colorScheme="primary"
        onPress={() => {
          setUser({ id: "kdhjfkds", favorite_events: [] });
        }}
        mb={10}
      >
        Log in
      </Button>
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
