import { View, Text } from 'react-native'
import React from 'react'
import { Center, Button } from 'native-base'

const Profile = ({navigation}) => {
  return (
    <Center h={'full'} w={'full'}>
      <Text>Profile</Text>
      <Button
        colorScheme="primary"
        onPress={()=>{
          navigation.navigate('Tickets')
        }}
      >
        Tickets
      </Button>
      <Button
        colorScheme="secondary"
        onPress={()=>{
          navigation.navigate('Favorites')
        }}

      >
        Favorites
      </Button>

    </Center>
  )
}

export default Profile