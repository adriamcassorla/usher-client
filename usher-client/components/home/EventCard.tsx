import { View, Text } from 'react-native'
import React from 'react'

import { Button } from 'native-base'

const EventCard = ({event, navigation}) => {
  return (
    <View>
      <Text>EventCard for event {event}</Text>

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

export default EventCard