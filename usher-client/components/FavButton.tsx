import * as React from "react";
import { Button, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import toggleFav from "../utils/helpers/favs";
import { UserContext } from "../services/contexts/UserContext";

type Props = {
  eventId: number
};

const FavButton = ({eventId}: Props) => {
  const { user, populateUser } = React.useContext(UserContext);
  const [isFavorite, setIsFavorite] = React.useState(user?.favorite_events.includes(eventId));
  const handlePress = async () => {
    console.log(user?.favorite_events)
    const newUser = await toggleFav(eventId, user?.favorite_events)
    populateUser(newUser)
    
    setIsFavorite(favorite => !favorite)
  }

    return ( !isFavorite ? 
      <Button
      pt={3}
      borderRadius="full"
      w={10}
      h={10}
      variant={"unstyled"}
      bg="primary.700"
      _pressed={{ bg: "primary.100" }}
      onPress={handlePress}
      >
      <Icon as={Ionicons} name="heart" color={"light.50"} size={7}/>
    </Button>
  :
      <Button
      pt={3}
      borderRadius="full"
      w={10}
      h={10}
      variant={"unstyled"}
      bg="light.50"
      _pressed={{ bg: "primary.100" }}
      onPress={handlePress}
      >
      <Icon as={Ionicons} name="heart" color={"primary.700"} size={7}/>
    </Button>

    )
};

export default FavButton;
