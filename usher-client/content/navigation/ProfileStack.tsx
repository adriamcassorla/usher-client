import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Profile, Favorites, Tickets } from '../pages';
import { ProfileStackParamList } from '../../utils/Types/navTypes';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileStack = ({ navigation }) => {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // navigation.reset()
      navigation.navigate('Profile');
    });
    return unsubscribe;
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        options={{
          headerTitleStyle: { fontSize: 24, color: 'white' },
        }}
        name="Favorites"
        component={Favorites}
      />
      <Stack.Screen
        options={{
          headerTitleStyle: { fontSize: 24, color: 'white' },
        }}
        name="Tickets"
        component={Tickets}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
