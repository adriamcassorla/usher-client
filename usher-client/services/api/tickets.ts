import { gql, GraphQLClient } from "graphql-request";
import { AsyncStorage } from "react-native";

const apiURL = "https://tourn.me/usher/api";

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
    if (createTickets.error) return createTickets.error as string;
    return createTickets.show as Show
  } catch (e) {
    return 'Error while creating the tickets'
  }
}


export const getTicketUsage = async (id: string) => {
  const query = gql`
    query Query($id: String!) {
      getTicketUsage(id: $id) {
        used
        error
      }
    }
  `;

  try {
    const { getTicketUsage } = await client.request(query, { id });
    if (getTicketUsage.error) return getTicketUsage.error as string;
    return getTicketUsage.used as boolean
  } catch (e) {
    return 'Error while creating checking ticket usage'
  }
}

