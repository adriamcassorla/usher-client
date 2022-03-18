import { View, Text } from 'react-native'
import React from 'react'

import MiniEventCard from './MiniEventCard'

const MiniEventCardList = ({events}) => {
  const list = events.map(event => <MiniEventCard key={event} event={event}/>)

  return (
    <View>
      <Text style= {{textAlign:'center'}}>Mini event cards List</Text>
      {list}
    </View>
  )
}

export default MiniEventCardList