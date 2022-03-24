import { gql, GraphQLClient } from "graphql-request";
import { AsyncStorage } from "react-native";

const apiURL = "http://localhost:4004/graphql";
// const apiURL = "https://tourn.me/usher";
const client = new GraphQLClient(apiURL);

export const getJWT = async (email: string, password: string): Promise<UserProfile | string | null> => {
  const query = gql`
    query getUser($email: String, $password: String) {
      getUser(email: $email, password: $password) {
        error
        token
        user {
          id
          favorite_events {
            id
          }
        }
      }
    }
  `;

  try {
    const { getUser } = await client.request(query, { email, password });
    if (getUser.error) return getUser.error
    await AsyncStorage.setItem('user', getUser.token);
    return getUser.user;
  } catch (e) {
    console.error(e);
    return 'Internal error';
  }
}

export const createUser = async (email: string, password: string, firstName: string, lastName: string): Promise<UserProfile | null> => {
  const mutation = gql`
    mutation createUser($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
  createUser(email: $email, password: $password, first_name: $firstName, last_name: $lastName) {
      error
      token
      user {
        id
        favorite_events {
          id
        }
      }
    }
  }
  `;

  try {
    const { createUser } = await client.request(mutation, { email, password, firstName, lastName });
    if (createUser.error) return createUser.error
    await AsyncStorage.setItem('user', createUser.token);
    return createUser.user;
  } catch (e) {
    console.error(e);
    return null;
  }
}