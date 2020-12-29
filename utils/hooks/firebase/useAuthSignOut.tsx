// ANCHOR Next
import { useRouter } from 'next/router';

// ANCHOR Nodes
import { useAuth } from '@medion/nodes/firebase/firebase-auth-node';

export const useAuthSignOut = () => {
  const router = useRouter();
  const auth = useAuth();

  if (auth.status === 'success' && auth.data.currentUser) {
    auth.data.signOut()
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });

    router.push('/')
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }

  return undefined;
};
