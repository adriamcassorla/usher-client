import * as React from "react";
import { Button, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import toggleFav from "../utils/helpers/favs";
import { UserContext } from "../services/contexts/UserContext";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

type Props = {
  eventId: number;
};

const FavButton = ({ eventId }: Props) => {
  const { user, populateUser } = React.useContext(UserContext);
  const [isFavorite, setIsFavorite] = React.useState(
    user?.favorite_ids.includes(eventId)!
  );
  const handlePress = async () => {
    setIsFavorite((fav) => !fav);
    const favorite_ids = await toggleFav(eventId, isFavorite);
    const updatedUser = { ...user, favorite_ids } as UserProfile;
    populateUser(updatedUser);
  };
  useFocusEffect(
    useCallback(() => {
      const unsubscribe = setIsFavorite(user?.favorite_ids.includes(eventId)!);
      return unsubscribe;
    }, [])
  );
  return (
    <Button
      pt={3}
      borderRadius="full"
      w={10}
      h={10}
      variant={"unstyled"}
      bg="white"
      opacity={isFavorite ? "1" : "0.8"}
      _pressed={{ opacity: 0.5 }}
      onPress={handlePress}
    >
      <Icon
        as={Ionicons}
        name={!isFavorite ? "heart-outline" : "heart"}
        color={"primary.700"}
        size={7}
      />
    </Button>
  );
};

export default FavButton;
