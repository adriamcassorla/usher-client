import { gql, GraphQLClient } from "graphql-request";

const apiURL = "https://tourn.me/usher";
const client = new GraphQLClient(apiURL);

export const getCityEvents = async (city: string, dayRange: number = 3) => {
  const query = gql`
    query GetCityEvents($city: String!, $dayRange: Int!) {
      getCityEvents(city: $city, dayRange: $dayRange) {
        name
        today_shows {
          date
          active_sale
        }
        id
        price
        type
        genres
        image
        poster
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
    return events.getCityEvents;
  } catch (e) {
    console.error(e);
    return [];
  }
};


export const getEventInfo = async (eventID: number, isToday: boolean) => {
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
    today_shows @include(if: $isToday){
      date
      active_sale
      available_seats
      id
    }
  }
}
  `;
  try {
    const event = await client.request(query, { eventID, isToday });
    return event.getEvent;
  }
  catch (e) {
    console.error(e);
    return [];
  }
};