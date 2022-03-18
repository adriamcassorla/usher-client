import { View, Text } from 'react-native';
import React from 'react';

import { Center, Button } from 'native-base';

const UnauthorizedHome = ({setUser}) => {
  return (
    <View>
      <Center h="full" w="full" bg="light.100">
        <Text>UnauthorizedHome</Text>
        <Button
          colorScheme="primary"
          onPress={()=>{
            setUser(true);
          }}

        >
          Primary
        </Button>

      </Center>
    </View>
  );
};

export default UnauthorizedHome;
