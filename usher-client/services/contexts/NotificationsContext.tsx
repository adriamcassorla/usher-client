import * as React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import {
  NotificationHandler,
  setNotificationHandler,
} from 'expo-notifications';
import { useUserContext } from './UserContext';
import { registerForPushNotificationsAsync } from '../../utils/helpers/notifications';

type NotificationsContextType = {
  setNotificationHandler(handler: NotificationHandler | null): void;
};

const defaultValue: NotificationsContextType = {
  setNotificationHandler: () => {},
};

export const NotificationsContext =
  createContext<NotificationsContextType>(defaultValue);

export const NotificationsProvider = ({ children }: any) => {
  const { user } = useUserContext();

  useEffect(() => {
    (async () => {
      // Get notification token for user
      await registerForPushNotificationsAsync();
      //
    })();
  }, []);

  // Get user ID and user favs
  // Get device token
  // Create notifications after every login?

  // !Example notification handler
  // setNotificationHandler({
  //   handleNotification: async () => ({
  //     shouldShowAlert: true,
  //     shouldPlaySound: false,
  //     shouldSetBadge: false,
  //   }),
  // });

  return (
    <NotificationsContext.Provider value={{ setNotifactionsHandler }}>
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotificationsContext = () => useContext(NotificationsContext);
