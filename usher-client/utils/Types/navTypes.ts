import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export type HomeTabParamList = {
  Home: undefined;
  Search: undefined;
  Map: undefined;
  ProfileStack: undefined;
};

export type MainStackParamList = {
  Main: undefined;
  Event: { eventId: number };
  Payment: { showId: string };
  Confirmation: undefined;
}

export type ProfileStackParamList = {
  Profile: undefined;
  Favorites: undefined;
  Tickets: undefined;
}

export type MainStackNavType = StackNavigationProp<MainStackParamList>;
export type BottomTabScreenType = BottomTabScreenProps<HomeTabParamList>;
export type StackScreenType = StackScreenProps<ProfileStackParamList>;