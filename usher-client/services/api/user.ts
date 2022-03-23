import { gql, GraphQLClient } from "graphql-request";
import { AsyncStorage } from "react-native";
import { login } from "../../utils/helpers/login";

//const apiURL = "http://localhost:4004";
const apiURL = "https://tourn.me/usher";
const client = new GraphQLClient(apiURL);

export const addFav = async (eventId: number) => {
  const token = await AsyncStorage.getItem('user')
  client.setHeader('authorization', `Bearer ${token}`)
  const mutation = gql`
    mutation AddFav($eventId: Int!) {
      addFav(eventId: 200) {
        id
      }
    }
    `
    try {
      const { addFav } = await client.request(mutation);
      return addFav
    } catch (e) {
      console.error(e);
      return
    }
  }

  export const deleteFav = async (eventId: number) => {
    const token = await AsyncStorage.getItem('user')
    client.setHeader('authorization', `Bearer ${token}`)
    const mutation = gql`
      mutation DeleteFav($eventId: Int!) {
        deleteFav(eventId: 200) {
          id
        }
      }
      `
      try {
        const { deleteFav } = await client.request(mutation);
        return deleteFav
      } catch (e) {
        console.error(e);
        return
      }
    }

export const logInWithToken = async (token: string) => {
  client.setHeader('authorization', `Bearer ${token}`)
  const query = gql`
    query Login {
      login {
        error
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
    const { login } = await client.request(query);
    if (login.error) return null
    return login.user as User
  } catch (e) {
    console.error(e);
    return null;
  }
}

export const getUserProfile = async () => {
  const token = await AsyncStorage.getItem('user');
  client.setHeader('authorization', `Bearer ${token}`)

  const query = gql`
    query GetProfile {
      getProfile {
        first_name
        last_name
        notifications
        favorite_events {
          id
        }
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
    }
  `;

try {
  const { getProfile } = await client.request(query);
  return getProfile
} catch (e) {
  console.error(e);
  return null;
}
};