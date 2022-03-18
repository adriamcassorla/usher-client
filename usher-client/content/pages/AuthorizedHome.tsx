import { View, Text } from 'react-native'
import React from 'react'

import { Button, ScrollView } from 'native-base'

import { Highlights, FilterMenu, EventsList, EventCard } from '../../components/home'

const AuthorizedHome = ({navigation}) => {
  const events=[1,2,3,4,5,6,7,8,9,10,11,12]
  const eventCards =events.map(e => <EventCard event={e} key={e} navigation={navigation}/>)
  return (
    <ScrollView stickyHeaderIndices={[1]}>
      <Highlights/>
      <FilterMenu/>
      {eventCards}
    </ScrollView>
  )
}

export default AuthorizedHome