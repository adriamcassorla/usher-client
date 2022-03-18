import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthorizedHome, Map, Search } from '../pages';
import ProfileStack from './ProfileStack';

const Tabs = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
      <Tabs.Navigator>
        <Tabs.Screen options={{headerShown:false}} name="Home" component={AuthorizedHome} />
        <Tabs.Screen options={{headerShown:false}} name="Search" component={Search} />
        <Tabs.Screen options={{headerShown:false}} name="Map" component={Map} />
        <Tabs.Screen options={{headerShown:false}} name="ProfileStack" component={ProfileStack} />
      </Tabs.Navigator>
  );
};

export default HomeNavigator;
