import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AuthorizedHome from '../pages/AuthorizedHome';
import Map from '../pages/Map';
import Search from '../pages/Search';
import ProfileStack from './ProfileStack';

const Tabs = createBottomTabNavigator();

const HomeBottomTabsNavigator = () => {
  return (
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={AuthorizedHome} />
        <Tabs.Screen name="Search" component={Search} />
        <Tabs.Screen name="Map" component={Map} />
        <Tabs.Screen name="ProfileStack" component={ProfileStack} />
      </Tabs.Navigator>
  );
};

export default HomeBottomTabsNavigator;
