import { View, Text } from 'react-native'
import React from 'react'

import { Button } from 'native-base'

const AuthorizedHome = ({navigation}) => {
  return (
    <View>
      <Text>AuthorizedHome</Text>
      <Button
        colorScheme="primary"
        onPress={()=>{
          navigation.navigate('Event');
        }}

      >
        Check event
      </Button>

    </View>
  )
}

export default AuthorizedHome