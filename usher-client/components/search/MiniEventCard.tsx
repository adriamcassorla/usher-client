import { View, Text } from 'react-native'
import React from 'react'

const MiniEventCard = ({event}) => {
  return (
    <View style={{backgroundColor:'blue', padding:10, margin:10}}>
      <Text style={{color:'white'}}>Event card for an event from: {event}</Text>
    </View>
  )
}

export default MiniEventCard