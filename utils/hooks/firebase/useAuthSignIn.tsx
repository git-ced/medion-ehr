// ANCHOR React
import { useCallback } from 'react';

// ANCHOR Nodes
import { useAuth } from '@medion/nodes/firebase/firebase-auth-node';

interface IProps {
  email: string;
  password: string;
}

export const useAuthSignIn = ({ email, password }: IProps) => {
  const auth = useAuth();

  const call = useCallback(
    () => {
      if (auth.status === 'success') {
        if (auth.data.currentUser) {
          auth.data.signOut()
            .catch((err) => {
              // eslint-disable-next-line no-console
              console.error(err);
            });
        }

        auth.data.signInWithEmailAndPassword(email, password)
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.error(err);
          });
      }
    },
    [auth.data, auth.status, email, password],
  );

  return call;
};
