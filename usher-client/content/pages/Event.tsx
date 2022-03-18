import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'native-base'

import { Center } from 'native-base'

const Event = ({navigation}) => {
  return (
    <Center h={'full'} w={'full'}>
      <Text>Event</Text>
      <Text>But I don't have any event data!</Text>
      <Button
        colorScheme="primary"
        onPress={()=>{
          navigation.navigate('Payment')
        }}

      >
        Book tickets
      </Button>

    </Center>
  )
}

export default Event