require('dotenv').config();

module.exports = {
  schema: [
    {
      'https://medion.hasura.app/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
        }
      },
    },
  ],
  documents: "graphql/documents/**/*.gql",
  overwrite: true,
  generates: {
    'graphql/types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
}

