import { gql, GraphQLClient } from "graphql-request";
import { AsyncStorage } from "react-native";

const apiURL = "https://tourn.me/graphql";

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
            venue {
              name
            }
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

