import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { useEventsContext } from '../../services/contexts/EventsContext';
import { useUserContext } from '../../services/contexts/UserContext';
import { capitalize } from './home';

export function setFavsNotificationHandler(
  user: UserProfile,
  events: EventType[]
) {
  Notifications.setNotificationHandler({
    handleNotification: async (notification) => {
      const show = events?.find(
        (event) =>
          event.id === Number(notification.request.content.data.eventId)
      )?.next_show;
      if (
        notification.request.content.data.userId === user?.id &&
        user?.favorite_ids.includes(
          Number(notification.request.content.data.eventId)
        ) &&
        show?.available_seats &&
        show.active_sale
      ) {
        return {
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: true,
        };
      } else {
        return {
          shouldShowAlert: false,
          shouldPlaySound: false,
          shouldSetBadge: false,
        };
      }
    },
  });
}

export async function resetNotifications() {
  const token = await registerForPushNotificationsAsync();
  await Notifications.dismissAllNotificationsAsync();
}

export async function scheduleInitialFavsNotifications(
  user: UserProfile,
  events: EventType[]
) {
  for await (const favId of user.favorite_ids) {
    scheduleFavNotification(user.id, events, favId);
  }
}

export async function scheduleFavNotification(
  userId: string,
  events: EventType[],
  favId: number
) {
  const favEvent = events?.find((event) => event.id === favId);
  const threeHours = 60 * 60 * 1000 * 3;
  const notificationTime = +favEvent?.next_show.date! - threeHours;
  if (favEvent?.next_show && notificationTime > Date.now()) {
    try {
      const notificationId = await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Last call for tickets! 🎟',
          body: `Book now for tonight's show of ${capitalize(favEvent.name!)}`,
          data: {
            eventId: favEvent.id,
            userId,
          },
        },
        trigger: {
          seconds: 3,
          // date: new Date(+favEvent.next_show.date - threeHours),
        },
      });
      console.log(notificationId);
    } catch (e) {
      console.error(e);
    }
  }
}

export async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#F5F5F5',
    });
  }

  return token;
}
