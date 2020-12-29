// ANCHOR Firebase
import firebase from 'firebase';

// ANCHOR Graph State
import { createGraphNode, createGraphNodeResource } from 'graph-state';
import { useGraphNodeValue } from 'react-graph-state';

// ANCHOR Nodes
import { firebaseAppNode } from './firebase-app-node';

export const firebaseAuthNode = createGraphNode<Promise<firebase.auth.Auth>>({
  key: 'firebase-auth',
  get: async ({ get }) => {
    const app = await get(firebaseAppNode);

    await import('firebase/auth');

    return app.auth();
  },
});

export const firebaseAuthResource = createGraphNodeResource(firebaseAuthNode);

export const useAuth = () => useGraphNodeValue(firebaseAuthResource);
