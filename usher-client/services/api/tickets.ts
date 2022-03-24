import { gql, GraphQLClient } from "graphql-request";
import { AsyncStorage } from "react-native";

// const apiURL = "http://localhost:4004";
// const apiURL = "http://192.168.1.108:4004";

const apiURL = "https://tourn.me/usher";

const client = new GraphQLClient(apiURL);

export const generateTicket = async (showId: string, nSeats: number) => {
  const jwt = await AsyncStorage.getItem('user');
  client.setHeader('authorization', `Bearer ${jwt}`)
  const mutation = gql`
    mutation CreateTickets($showId: String!, $nSeats: Int!) {
      createTickets(show_id: $showId, nSeats: $nSeats) {
        error
        show {
          date
          event {
            name
          }
        }
      }
    }
  `;

  try {
    const { createTickets } = await client.request(mutation, { showId, nSeats });
    if (createTickets.error) console.error(createTickets.error);
    return createTickets.show as Show
  } catch (e) {
    console.error(e);
    return null;
  }
}

