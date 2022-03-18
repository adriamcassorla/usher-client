import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../pages/Profile';
import Favorites from '../pages/Favorites';
import Tickets from '../pages/Tickets';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Profile" component={Profile} />
        <Stack.Screen options={{headerShown:false}} name="Favorites" component={Favorites} />
        <Stack.Screen options={{headerShown:false}} name="Tickets" component={Tickets} />
      </Stack.Navigator>
  );
};

export default ProfileStack;
