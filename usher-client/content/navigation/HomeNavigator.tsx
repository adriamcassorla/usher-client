import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Map, Search, Home } from "../pages";
import ProfileStack from "./ProfileStack";
import { EventsProvider } from "../../services/contexts/EventsContext";
import { HomeTabParamList } from "../../utils/Types/navTypes";
import { Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator<HomeTabParamList>();

const HomeNavigator = () => {
  const tabIcon = (color: string, size: number, name: string) => {
    return <Icon size={size} color={color} as={<Ionicons name={name} />} />;
  };

  return (
    <EventsProvider>
      <Tabs.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: { display: "none" },
        }}
      >
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) =>
              tabIcon(color, size, "home-outline"),
          }}
        />
        <Tabs.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ color, size }) => tabIcon(color, size, "ios-search"),
          }}
        />
        <Tabs.Screen
          name="Map"
          component={Map}
          options={{
            tabBarIcon: ({ color, size }) =>
              tabIcon(color, size, "map-outline"),
          }}
        />
        <Tabs.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarIcon: ({ color, size }) =>
              tabIcon(color, size, "person-outline"),
          }}
        />
      </Tabs.Navigator>
    </EventsProvider>
  );
};

export default HomeNavigator;
