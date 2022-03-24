import { gql, GraphQLClient } from "graphql-request";
import { AsyncStorage } from "react-native";

const apiURL = "http://localhost:4004";
// const apiURL = "https://tourn.me/usher";

const client = new GraphQLClient(apiURL);

export const generateTicket = async (userId: string, showId: string) => {
  const jwt = await AsyncStorage.getItem('user');
  client.setHeader('authorization', `Bearer ${jwt}`)
  const mutation = gql`
    mutation Mutation($userId: String!, $showId: String!) {
      createTicket(userId: $userId, showId: $showId) {
        id
      }
    }
  `;

  try {
    const { createTicket } = await client.request(mutation, { userId, showId });
    return createTicket as string
  } catch (e) {
    console.error(e);
    return null;
  }
}

