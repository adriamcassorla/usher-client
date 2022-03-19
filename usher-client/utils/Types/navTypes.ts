type HomeTabParamList = {
  Home: undefined;
  Search: undefined;
  Map: undefined;
  ProfileStack: undefined;
};

type MainStackParamList = {
  Main: undefined;
  Event: { eventId: number };
  Payment: { showId: string };
  Confirmation: undefined;
}

type ProfileStackParamList = {
  Profile: undefined;
  Favorites: undefined;
  Tickets: undefined;
}