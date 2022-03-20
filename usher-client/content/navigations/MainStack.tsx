import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Event, Payment, Confirmation } from "../pages";
import HomeNavigator from "./HomeNavigator";
import { MainStackParamList } from "../../utils/Types/navTypes";

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={HomeNavigator}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Event"
          component={Event}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Payment"
          component={Payment}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Confirmation"
          component={Confirmation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
