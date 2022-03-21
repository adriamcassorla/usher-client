import { gql, GraphQLClient } from 'graphql-request';
import { AsyncStorage } from 'react-native';

const apiURL = process.env.BASE_URL || 'http://localhost:4004';
const client = new GraphQLClient(apiURL);


export const getUser = ()=> {};
export const getProfile = async () => {
  const jwt = await AsyncStorage.getItem('user');
  client.setHeader('authorization', `Bearer ${jwt}`)
  const query = gql`
    query GetProfile {
    getProfile {
      email
      first_name
      last_name
      favorite_events {
        id
      }
      tickets {
        id
      }
      notifications
    }
    }
  `;

  try {
    const profile = await client.request(query)
    return profile.getProfile;
  } catch (e) {
    console.error(e);
    return null
  }
  }