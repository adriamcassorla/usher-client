import { gql, GraphQLClient } from "graphql-request";
import { AsyncStorage } from "react-native";

const apiURL = "http://localhost:4004";
const client = new GraphQLClient(apiURL);

export const getJWT = async (email: string, password: string): Promise<UserProfile | string | null> => {
  const query = gql`
    query getUser($email: String, $password: String) {
      getUser(email: $email, password: $password) {
        user {
          first_name
          last_name
          notifications
          favorite_ids
          tickets {
            id
            show {
              date
              event {
                image
                name
                price
                venue {
                  name
                  address
                }
              }
            }
          }

        }
        error
        token
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
      user {
          first_name
          last_name
          notifications
          favorite_ids
          tickets {
            id
            show {
              date
              event {
                image
                name
                price
                venue {
                  name
                  address
                }
              }
            }
          }

        }
        error
        token
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