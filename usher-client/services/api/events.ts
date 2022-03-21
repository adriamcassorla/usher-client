import { gql, GraphQLClient } from "graphql-request";
import { AsyncStorage } from "react-native";

const apiURL = process.env.BASE_URL || "http://localhost:4004";

const client = new GraphQLClient(apiURL);

export const getCityEvents = async (city: string, dayRange: number = 3): Promise<EventType[] | null> => {
  const jwt = await AsyncStorage.getItem('user');
  client.setHeader('authorization', `Bearer ${jwt}`)
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
          name
          latitude
          longitude
          address
        }
      }
    }
  `;

  try {
    const events = await client.request(query, { city, dayRange });
    return events.getCityEvents as EventType[];
  } catch (e) {
    console.error(e);
    return null;
  }
};


export const getEventInfo = async (eventID: number, isToday: boolean): Promise<EventType | null> => {
  const jwt = await AsyncStorage.getItem('user');
  client.setHeader('authorization', `Bearer ${jwt}`)
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
    shows {
      date
    }
    today_shows @include(if: $isToday){
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
    console.error(e);
    return null;
  }
};