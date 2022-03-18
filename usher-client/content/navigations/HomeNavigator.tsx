import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthorizedHome, Map, Search } from '../pages';
import ProfileStack from './ProfileStack';

const Tabs = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={AuthorizedHome} />
        <Tabs.Screen name="Search" component={Search} />
        <Tabs.Screen name="Map" component={Map} />
        <Tabs.Screen name="ProfileStack" component={ProfileStack} />
      </Tabs.Navigator>
  );
};

export default HomeNavigator;
