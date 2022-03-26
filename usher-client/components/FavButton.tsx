import * as React from 'react';
import { Button, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import toggleFav from '../utils/helpers/favs';
import { UserContext, useUserContext } from '../services/contexts/UserContext';

import * as Notifications from 'expo-notifications';

type Props = {
  eventId: number;
  next_date: number;
};

const FavButton = ({ eventId, next_date }: Props) => {
  const { user, populateUser } = React.useContext(UserContext);

  const [isFavorite, setIsFavorite] = React.useState(
    user?.favorite_ids?.includes(eventId)!
  );

  React.useEffect(() => {
    if (user) setIsFavorite(user?.favorite_ids?.includes(eventId)!);
    return () => {};
  }, [user?.favorite_ids?.length]);

  const handlePress = async () => {
    setIsFavorite((fav) => !fav);
    const favorite_ids = await toggleFav(eventId, isFavorite);
    const updatedUser = { ...user, favorite_ids } as UserProfile;
    populateUser(updatedUser);
    // TODO: Send proper event related title and body
    if (!isFavorite) {
      try {
        const notification = await Notifications.scheduleNotificationAsync({
          content: {
            title: 'This is now a fav! ',
            body: "We're working to let u know when the next show comes up",
            data: { userId: user?.id, eventId },
          },
          // Set notification for three hours before fav event
          // trigger: new Date(next_date - 60 * 60 * 1000 * 3),
          trigger: { seconds: 1 },
        });
        console.log('Notification scheduled with id', notification);
      } catch (e) {
        console.log('Notification not scheduled', e);
      }
    }
  };

  return (
    <Button
      pt={3}
      borderRadius="full"
      w={10}
      h={10}
      variant={'unstyled'}
      bg="white"
      opacity={isFavorite ? '1' : '0.8'}
      _pressed={{ opacity: 0.5 }}
      onPress={handlePress}
    >
      <Icon
        as={Ionicons}
        name={!isFavorite ? 'heart-outline' : 'heart'}
        color={'primary.500'}
        size={7}
      />
    </Button>
  );
};

export default FavButton;
