import { View, Text } from 'react-native'
import React from 'react'

import EventCard from './EventCard'

const EventsList = ({events, navigation}) => {
  const cards = events.map(event => <EventCard navigation={navigation} key={event} event={event}/>)
  return (
    <View>
      <Text style={{textAlign: 'center'}}>Events list</Text>
      {cards}
    </View>
    )
}

export default EventsList