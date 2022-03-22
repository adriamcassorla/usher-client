import { gql, GraphQLClient } from "graphql-request";

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

export const getUserProfile = () => { };