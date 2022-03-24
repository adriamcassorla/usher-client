import * as React from "react";
import { FlatList } from "native-base";

import type { CompositeScreenProps } from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";
import {
  BottomTabScreenType,
  ProfileStackParamList,
} from "../../utils/Types/navTypes";
import { EventsContext } from "../../services/contexts/EventsContext";
import { UserContext } from "../../services/contexts/UserContext";
import EventCard from "../../components/home/EventCard";

const Favorites = () => {
  const { events, populateEvents } = React.useContext(EventsContext);
  const { user, populateUser } = React.useContext(UserContext);
  const [favorites, setFavorites] = React.useState<EventType[] | undefined>(
    undefined
  );

  React.useEffect(() => {
    const favs = events?.filter((event) =>
      user?.favorite_ids?.includes(event.id)
    );
    setFavorites(favs);
  }, [user]);

  return (
    <FlatList
      mt="30px"
      data={favorites}
      renderItem={({ item }: { item: EventType }) => <EventCard event={item} />}
      keyExtractor={(item) => item.id.toString()}
      extraData={user}
    />
  );
};

export default Favorites;
