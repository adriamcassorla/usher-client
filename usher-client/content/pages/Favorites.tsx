import * as React from "react";
import { FlatList } from "native-base";

import type { CompositeScreenProps } from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";
import {
  BottomTabScreenType,
  ProfileStackParamList,
} from "../../utils/Types/navTypes";
import { EventsContext } from "../../services/contexts/EventsContext";
import EventCard from "../../components/home/EventCard";
import { UserContext } from "../../services/contexts/UserContext";

type Props = CompositeScreenProps<
  StackScreenProps<ProfileStackParamList, "Favorites">,
  BottomTabScreenType
>;

const Favorites = ({ navigation, route }: Props) => {
  
  const { events, populateEvents} = React.useContext(EventsContext)
  const [ parsed, setParsed ] = React.useState<EventType[] | null>(null);

  const parseFavorites = () => {
    const favIds = route.params.favorites.map(event => event.id);
    const todayFavs = events?.filter(event => favIds.includes(event.id))
    return route.params.favorites.map(event => {
      if (todayFavs) 
      for (let todayEvent of todayFavs) {
        if (event.id === todayEvent.id) {
          event.today_shows = todayEvent.today_shows
          return event
        }
      }
      event.today_shows = []
      return event
      })
  }

  React.useEffect(() => {
    setParsed(parseFavorites())
  }, [])
  return (
    <FlatList
      mt="30px"
      data={parsed}
      renderItem={({ item } : { item : EventType } )=> <EventCard event={item}/>}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Favorites;
