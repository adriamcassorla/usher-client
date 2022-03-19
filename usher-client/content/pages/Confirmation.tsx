import * as React from "react";
import { Button, Center, Text } from "native-base";

const Confirmation = ({ navigation }) => {
  return (
    <Center h={"full"} w={"full"}>
      <Text>Confirmation</Text>
      <Button
        colorScheme="primary"
        onPress={() => {
          navigation.navigate("Main");
        }}
      >
        All done! Return Home!
      </Button>
    </Center>
  );
};

export default Confirmation;
