import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Event, Payment, Confirmation } from '../pages';
import HomeBottomTabsNavigator from './HomeBottomTabsNavigator';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Main" component={HomeBottomTabsNavigator} />
        <Stack.Screen options={{headerShown:false}} name="Event" component={Event} />
        <Stack.Screen options={{headerShown:false}} name="Payment" component={Payment} />
        <Stack.Screen options={{headerShown:false}} name="Confirmation" component={Confirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
