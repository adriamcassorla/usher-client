import { gql, GraphQLClient } from "graphql-request";

const apiURL = "https://tourn.me/usher";
const client = new GraphQLClient(apiURL);

export default async (city: string, dayRange: number = 3) => {
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
  const events = await client.request(query, { city, dayRange });
  return events.getCityEvents;
};
