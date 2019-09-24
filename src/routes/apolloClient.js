import ApolloClient, { gql } from 'apollo-boost';
import fetch from 'node-fetch';

export const client = new ApolloClient({
  uri: 'http://138.68.209.123:4000/graphql',
  fetch: fetch
});
