import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_URL } from "./consts";
import { offsetLimitPagination } from "@apollo/client/utilities";

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          launchesPast: offsetLimitPagination(),
        },
      },
    },
  }),
});

export default client;
