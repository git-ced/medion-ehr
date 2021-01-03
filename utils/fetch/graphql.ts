// ANCHOR GraphQL
import { GraphQLClient } from 'graphql-request';
import { getSdk } from '@medion/graphql/types';

// ANCHOR Config
import { HASURA_ENDPOINT, HASURA_SECRET } from '../config/hasura';

const client = new GraphQLClient(HASURA_ENDPOINT, {
  headers: {
    'content-type': 'application/json',
    'Accept-Encoding': 'br, gzip',
    'x-hasura-admin-secret': HASURA_SECRET,
  },
});

export const graphSdk = getSdk(client);
