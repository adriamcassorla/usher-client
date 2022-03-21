import { gql, GraphQLClient } from "graphql-request";

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
    console.log(login);
    return login
  } catch (e) {
    console.error(e);
    return null;
  }
}