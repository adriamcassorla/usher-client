import { gql, GraphQLClient } from "graphql-request";
import { AsyncStorage } from "react-native";

const apiURL = "http://localhost:4004";
const client = new GraphQLClient(apiURL);

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
    console.log(login);
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
  const { favorite_events, tickets, first_name, last_name, notifications} = getProfile;
  return getProfile
} catch (e) {
  console.error(e);
  return null;
}
};