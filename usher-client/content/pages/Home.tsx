import * as React from "react";
const { useEffect } = React;
import { Center } from "native-base";

import { useUserContext } from "../../services/contexts/UserContext";
import { useEventsContext } from "../../services/contexts/EventsContext";
import HomeList from "../../components/home/HomeList";
import GradientProvider from "../../components/GradientProvider";
import { registerForPushNotificationsAsync, setNotificationHandler } from "../../utils/helpers/notifications";

const Home = () => {
  // * NOTE *  City should be a state depending on picker
  const city = "Barcelona";

  const { events, populateEvents } = useEventsContext();
  const { user, populateUser } = useUserContext();

  useEffect(() => {
    populateEvents(city);
  }, [city]);

  useEffect(() => {
    // Generate notification token and add it to the user context
    (async() => {
      setNotificationHandler();
      const token = await registerForPushNotificationsAsync();
      populateUser({...user, notificationsToken: token} as UserProfile);
    })()
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
