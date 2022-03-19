import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Map, Search, Home } from "../pages";
import ProfileStack from "./ProfileStack";
import { EventsProvider } from "../../services/contexts/EventsContext";

const Tabs = createBottomTabNavigator<HomeTabParamList>();

const HomeNavigator = () => {
  return (
    <EventsProvider>
      <Tabs.Navigator>
        <Tabs.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Tabs.Screen
          options={{ headerShown: false }}
          name="Search"
          component={Search}
        />
        <Tabs.Screen
          options={{ headerShown: false }}
          name="Map"
          component={Map}
        />
        <Tabs.Screen
          options={{ headerShown: false }}
          name="ProfileStack"
          component={ProfileStack}
        />
      </Tabs.Navigator>
    </EventsProvider>
  );
};

export default HomeNavigator;
