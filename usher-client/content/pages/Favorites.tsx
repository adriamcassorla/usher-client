import * as React from "react";
import { FlatList, View, Text, Center, Image } from "native-base";

import { EventsContext } from "../../services/contexts/EventsContext";
import { UserContext } from "../../services/contexts/UserContext";
import EventCard from "../../components/home/EventCard";
const favIcon = require("./../../assets/icons8-bookmark-512.png");

const Favorites = () => {
  const { events } = React.useContext(EventsContext);
  const { user } = React.useContext(UserContext);
  const [loading, setLoading] = React.useState(true);
  const [favorites, setFavorites] = React.useState<EventType[] | undefined>(
    undefined
  );

  React.useEffect(() => {
    const favs = events?.filter((event) =>
      user?.favorite_ids?.includes(event.id)
    );
    setFavorites(favs);
    setLoading(false);
  }, [user]);

  if (!favorites?.length && !loading)
    return (
      !favorites?.length && (
        <Center h={"100%"} w={"100%"} alignItems="center" mt={0}>
          <Image
            source={favIcon}
            alt="No favorites yet"
            size="xl"
            opacity={0.8}
          />

          <Text w={330} my={3} textAlign="center" fontSize="lg" color={"white"}>
            No events saved yet.
          </Text>
        </Center>
      )
    );

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
