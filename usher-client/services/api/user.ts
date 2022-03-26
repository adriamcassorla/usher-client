import { gql, GraphQLClient } from 'graphql-request';
import { AsyncStorage } from 'react-native';

const apiURL = 'https://tourn.me/usher/api';
const client = new GraphQLClient(apiURL);

export const addFav = async (eventId: number) => {
  const token = await AsyncStorage.getItem('user');
  client.setHeader('authorization', `Bearer ${token}`);
  const mutation = gql`
    mutation AddFav($eventId: Int!) {
      addFav(eventId: $eventId) {
        favorite_ids
      }
    }
  `;
  try {
    const { addFav } = await client.request(mutation, { eventId });
    return addFav.favorite_ids as number[]
  } catch (e) {
    return 'Network error while adding a new favourite' as string
  }
};

export const deleteFav = async (eventId: number) => {
  const token = await AsyncStorage.getItem('user');
  client.setHeader('authorization', `Bearer ${token}`);
  const mutation = gql`
    mutation DeleteFav($eventId: Int!) {
      deleteFav(eventId: $eventId) {
        favorite_ids
      }
    }
  `;
  try {
    const { deleteFav } = await client.request(mutation, { eventId });
    return deleteFav.favorite_ids as number[]
  } catch (e) {
    return 'Network error while deliting a favourite' as string
  }
};

export const getUserProfile = async () => {
  const token = await AsyncStorage.getItem('user');
  if (!token) return null;
  client.setHeader('authorization', `Bearer ${token}`);

  const query = gql`
    query GetUser {
      getUser {
        user {
          id
          first_name
          last_name
          email
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
    if (getUser.error) return getUser.error as string
    return getUser.user as UserProfile
  } catch (e) {
    return 'Network error while trying to get user information' as string
  }
};
