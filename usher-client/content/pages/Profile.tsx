import React, { useEffect, useState } from 'react';
import { Center, Button, Alert, Text } from 'native-base';

const Profile = ({ navigation }) => {
  //TODO: Get setUser from context to log out

  //TODO: Make API call and set profile data using ID from params
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    console.log('Getting profile info using id from params');
  }, []);
  // TODO: Pass user info down in navigation props to tix and favs

  return (
    <Center h={'full'} w={'full'}>
      <Text>Profile</Text>
      <Button
        colorScheme="primary"
        onPress={() => {
          navigation.navigate('Tickets');
        }}
      >
        Tickets
      </Button>
      <Button
        colorScheme="secondary"
        onPress={() => {
          navigation.navigate('Favorites');
        }}
      >
        Favorites
      </Button>
      <Button
        colorScheme="secondary"
        onPress={() => {
          Alert.alert('I need to get the user context to log you out!');
          //setUser(false)
        }}
      >
        Log out
      </Button>
    </Center>
  );
};

export default Profile;
