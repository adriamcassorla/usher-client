import { View, Text } from 'react-native'
import React from 'react'

import { Button, Center } from 'native-base'

const EventCard = ({event, navigation}) => {
  return (
    <Center h={20} w={'full'}>
      <Text>EventCard for event {event}</Text>

      <Button
        w={'80%'}
        colorScheme="primary"
        onPress={()=>{
          navigation.navigate('Event');
        }}

      >
        Check event
      </Button>
    </Center>
  )
}

export default EventCard