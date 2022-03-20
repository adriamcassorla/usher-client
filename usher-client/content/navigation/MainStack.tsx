import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Event, Payment, Confirmation } from "../pages";
import HomeNavigator from "./HomeNavigator";
import { MainStackParamList } from "../../utils/Types/navTypes";
import { useToken } from "native-base";

const Stack = createStackNavigator<MainStackParamList>();
const MainStack = () => {
  const [primary, background, card, text, notification] = useToken("colors", [
    "primary.600",
    "dark.50",
    "dark.100",
    "light.100",
    "tertiary.500",
  ]);
  const theme = {
    dark: false,
    colors: {
      primary,
      background,
      card,
      text,
      border: "",
      notification,
    },
  };

  return (
    <NavigationContainer theme={theme}>
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
