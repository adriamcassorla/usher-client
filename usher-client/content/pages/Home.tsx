// import * as React from "react";
// const { useContext, useEffect, useState } = React;
import { Center, Spinner, Text } from "native-base";

import { EventsContext } from "../../services/contexts/EventsContext";
import HomeList from "../../components/home/HomeList";

import GradientProvider from "../../components/GradientProvider";

import React, { useState, useEffect, useRef } from 'react';
import {  View, Button } from 'react-native';


import * as Notifications from 'expo-notifications'
import {setNotificationHandler, registerForPushNotificationsAsync, sendPushNotification} from '../../utils/helpers/notifications'

export default function Home() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    setNotificationHandler();
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });
    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);


  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text color='white'>Your expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text color='white'>Title: {notification && notification.request.content.title} </Text>
        <Text color='white'>Body: {notification && notification.request.content.body}</Text>
        <Text color='white'>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <Button
        title="Press to Send Notification"
        onPress={() => Notifications.scheduleNotificationAsync({
          content: {
            title: 'This took a minute, huh',
            body: 'banana tomato, you know me 🍌'
          },
          trigger : {
            seconds: 10,
          }
        })
      }
      />
    </View>
  );
}

// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.dev/notifications



// const Home = () => {
//   // * NOTE *  City should be a state depending on picker
//   const city = "Barcelona";

//   const { events, populateEvents } = useContext(EventsContext);

//   useEffect(() => {
//     populateEvents(city), [city];
//   }, []);

//   if (!events) return <Spinner color="primary.500" />;
//   return (
//     <GradientProvider>
//       <Center w="full" h="full">
//         <HomeList events={events} />
//       </Center>
//     </GradientProvider>
//   );
// };

// export default Home;
