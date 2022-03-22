import { gql, GraphQLClient } from "graphql-request";
import { AsyncStorage } from "react-native";
import { login } from "../../utils/helpers/login";

const apiURL = "https://www.tourn.me/usher";
const client = new GraphQLClient(apiURL);

export const getJWT = async (email: string, password: string): Promise<User | string | null> => {
  const query = gql`
    query login($email: String, $password: String) {
      login(email: $email, password: $password) {
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
    const { login } = await client.request(query, { email, password });
    if (login.error) return login.error
    await AsyncStorage.setItem('user', login.token);
    return login.user;
  } catch (e) {
    console.error(e);
    return 'Internal error';
  }
}

export const createUser = async (email: string, password: string, firstName: string, lastName: string): Promise<User | null> => {
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