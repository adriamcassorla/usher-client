import { gql, GraphQLClient } from "graphql-request";
import { AsyncStorage } from "react-native";

const apiURL = process.env.BASE_URL || "http://localhost:4004";
const client = new GraphQLClient(apiURL);

export const getJWT = async (email: string, password: string): Promise<String | null> => {
  const query = gql`
    query login($email: String!, $password: String!) {
      login(email: $email, password: $password)
    }
  `;

  try {
    const { login } = await client.request(query, { email, password });
    await AsyncStorage.setItem('user', login);
    return login;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export const createUser = async (email: string, password: string, firstName: string, lastName: string): Promise<String | null> => {
  const mutation = gql`
    mutation createUser($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
  createUser(email: $email, password: $password, first_name: $firstName, last_name: $lastName)
  }
  `;

  try {
    const { createUser } = await client.request(mutation, { email, password, firstName, lastName });
    const apiError = new RegExp('^Unsuccesful');
    if (createUser && !apiError.test(createUser)) {
      await AsyncStorage.setItem('user', createUser);
      return 'Welcome to Usher!'
    }
    return createUser;
  } catch (e) {
    console.error(e);
    return null;
  }
}