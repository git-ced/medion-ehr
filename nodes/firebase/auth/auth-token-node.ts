// ANCHOR Graph State
import { createGraphNode } from 'graph-state';
import { useGraphNodeValue } from 'react-graph-state';

// ANCHOR Nodes
import { authStateNode } from './auth-state-node';

export const authTokenNode = createGraphNode<string | null | undefined>({
  key: 'firebase-auth-token',
  get: ({ get, mutateSelf }) => {
    const user = get(authStateNode);

    if (user) {
      user.getIdToken()
        .then((token) => {
          mutateSelf(token);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        });

      return undefined;
    }

    return user;
  },
});

export const useAuthToken = () => useGraphNodeValue(authTokenNode);
