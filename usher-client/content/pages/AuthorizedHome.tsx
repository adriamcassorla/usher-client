import { View, Text } from 'react-native'
import React from 'react'

import { Button } from 'native-base'

import { Highlights, FilterMenu, EventsList, EventCard } from '../../components/home'

const AuthorizedHome = ({navigation}) => {
  return (
    <View>
      <Text style={{textAlign: 'center'}}>AuthorizedHome</Text>
      <Highlights/>
      <FilterMenu/>
      <EventsList navigation={navigation} events={['event A', 'event B', 'event C']}/>
    </View>
  )
}

export default AuthorizedHome