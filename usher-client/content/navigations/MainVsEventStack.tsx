import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Event from '../pages/Event';
import HomeBottomTabsNavigator from './HomeBottomTabsNavigator';

import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const MainVsEventStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Main" component={HomeBottomTabsNavigator} />
        <Stack.Screen options={{headerShown:false}} name="Event" component={Event} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainVsEventStack;
