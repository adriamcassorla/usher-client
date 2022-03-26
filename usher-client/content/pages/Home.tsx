import * as React from 'react';
const { useEffect } = React;
import { Center } from 'native-base';

import { useEventsContext } from '../../services/contexts/EventsContext';
import HomeList from '../../components/home/HomeList';
import GradientProvider from '../../components/GradientProvider';

import * as Notifications from 'expo-notifications';
import {
  UserProvider,
  useUserContext,
} from '../../services/contexts/UserContext';
import {
  resetNotifications,
  scheduleInitialFavsNotifications,
  setFavsNotificationHandler,
} from '../../utils/helpers/notifications';

const Home = () => {
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
  // Possible bug notifying for sold out event because events are not updated for client during session
  useEffect(() => {
    if (user && events) setFavsNotificationHandler(user, events);
  }, [user]);

  return (
    <GradientProvider>
      <Center w="full" h="full">
        <HomeList events={events} />
      </Center>
    </GradientProvider>
  );
};

export default Home;
