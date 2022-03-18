import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AuthorizedHome from '../pages/AuthorizedHome';
import Map from '../pages/Map';
import Search from '../pages/Search';

// import { enableScreens } from 'react-native-screens';
// enableScreens();

const Tabs = createBottomTabNavigator();

const HomeBottomTabsNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={AuthorizedHome} />
        <Tabs.Screen name="Search" component={Search} />
        <Tabs.Screen name="Map" component={Map} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default HomeBottomTabsNavigator;
