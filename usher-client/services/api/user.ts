import { gql, GraphQLClient } from "graphql-request";
import { AsyncStorage } from "react-native";
import { login } from "../../utils/helpers/login";

// const apiURL = "http://localhost:4004";
const apiURL = "https://tourn.me/usher";
const client = new GraphQLClient(apiURL);

export const addFav = async (eventId: number) => {
  const token = await AsyncStorage.getItem('user')
  client.setHeader('authorization', `Bearer ${token}`)
  const mutation = gql`
    mutation AddFav($eventId: Int!) {
      addFav(eventId: $eventId) {
        favorite_ids
      }
    }
    `
    try {
      const { addFav } = await client.request(mutation, {eventId});
      return addFav.favorite_ids
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
        deleteFav(eventId: $eventId) {
          favorite_ids
        }
      }
      `
      try {
        const { deleteFav } = await client.request(mutation, {eventId});
        return deleteFav.favorite_ids
      } catch (e) {
        console.error(e);
        return
      }
    }

export const getUserProfile = async () => {
  const token = await AsyncStorage.getItem('user');
  client.setHeader('authorization', `Bearer ${token}`)

  const query = gql`
    query GetUser {
      getUser {
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
  const { getUser } = await client.request(query);
  if (getUser.error) return null
  return getUser.user as UserProfile
} catch (e) {
  console.error(e);
  return null;
}
};