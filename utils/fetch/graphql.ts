// ANCHOR GraphQL
import { GraphQLClient } from 'graphql-request';
import { getSdk } from '@medion/graphql/types';

const ENDPOINT = 'https://medion.hasura.app/v1/graphql';

const client = new GraphQLClient(ENDPOINT, {
  headers: {
    'content-type': 'application/json',
    'Accept-Encoding': 'br, gzip',
    'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET ?? '',
  },
});

export const graphSdk = getSdk(client);
