import * as React from 'react';
const { useEffect } = React;
import { Center } from 'native-base';

import { useEventsContext } from '../../services/contexts/EventsContext';
import HomeList from '../../components/home/HomeList';
import GradientProvider from '../../components/GradientProvider';

import * as Notifications from 'expo-notifications';
import { useUserContext } from '../../services/contexts/UserContext';
import {
  resetNotifications,
  scheduleInitialFavsNotifications,
  setFavsNotificationHandler,
} from '../../utils/helpers/notifications';

import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { MainStackParamList } from '../../utils/Types/navTypes';

type Props = NativeStackScreenProps<MainStackParamList, 'Main'>;

const Home = ({ navigation }: Props) => {
  // * NOTE *  City should be a state depending on picker
  const city = 'Barcelona';

  const { events, populateEvents } = useEventsContext();
  const { user } = useUserContext();

  useEffect(() => {
    populateEvents(city);
  }, [city]);

  // Create notifications for faved events
  useEffect(() => {
    if (events && user) {
      resetNotifications();
      scheduleInitialFavsNotifications(user, events);
    }
  }, [events]);

  // Update fav notifications when likes change
  useEffect(() => {
    if (user && events) setFavsNotificationHandler(user, events);
  }, [user]);

  // Add listener to nav to event page on notification interaction
  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const eventId = response.notification.request.content.data.eventId;
        navigation.navigate('Event', { eventId, todayShows: [1, 2] });
      }
    );
    return () => subscription.remove();
  }, []);

  return (
    <GradientProvider>
      <Center w="full" h="full">
        <HomeList events={events} />
      </Center>
    </GradientProvider>
  );
};

export default Home;
