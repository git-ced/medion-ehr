// ANCHOR Firebase
import firebase from 'firebase';

// ANCHOR Graph State
import { createGraphNode } from 'graph-state';
import { useGraphNodeValue } from 'react-graph-state';

// ANCHOR Nodes
import { firebaseAuthNode } from '../firebase-auth-node';

export const authStateNode = createGraphNode<firebase.User | undefined | null>({
  key: 'firebase-auth-state',
  get: ({ get, mutateSelf, subscription }) => {
    get(firebaseAuthNode)
      .then((auth) => {
        subscription(() => auth.onAuthStateChanged(mutateSelf));
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });

    return undefined;
  },
});

export const useAuthState = () => useGraphNodeValue(authStateNode);
