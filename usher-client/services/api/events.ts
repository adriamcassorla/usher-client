import { gql, GraphQLClient } from 'graphql-request';
import { AsyncStorage } from 'react-native';

const apiURL = 'https://tourn.me/usher/api';
const client = new GraphQLClient(apiURL);

export const getCityEvents = async (city: string, dayRange: number = 3): Promise<EventType[]> => {
  const query = gql`
    query GetCityEvents($city: String!, $dayRange: Int!) {
      getCityEvents(city: $city, dayRange: $dayRange) {
        id
        name
        price
        type
        genres
        image
        poster
        today_shows {
          date
          active_sale
        }
        venue {
          id
          name
          latitude
          longitude
          address
        }
        next_show {
          date
          available_seats
          active_sale
        }
      }
    }
  `;
  const events = await client.request(query, { city, dayRange });
  return events.getCityEvents as EventType[];
};

export const getEventInfo = async (
  eventID: number,
  isToday: boolean
): Promise<EventType | null> => {
  const jwt = await AsyncStorage.getItem('user');
  client.setHeader('authorization', `Bearer ${jwt}`);
  const query = gql`
    query GetEvent($eventID: Int!, $isToday: Boolean!) {
      getEvent(id: $eventID) {
        name
        price
        type
        genres
        image
        poster
        language
        duration
        description
        venue {
          name
          address
          zipcode
          city
          latitude
          longitude
        }
        next_show {
          date
        }
        today_shows @include(if: $isToday) {
          id
          date
          active_sale
          available_seats
        }
      }
    }
  `;
  try {
    const event = await client.request(query, { eventID, isToday });
    return event.getEvent as EventType;
  }
  catch (e) {
    throw new Error('Network error while fetching info.')
  }
};
