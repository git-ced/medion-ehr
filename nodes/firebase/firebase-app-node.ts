// ANCHOR Graph State
import { createGraphNode } from 'graph-state';

// ANCHOR Import Scheduler
import { importForInteractive } from 'import-scheduler';

// ANCHOR Utils
import { FIREBASE_CONFIG } from '@medion/utils/config/firebase';

export const firebaseAppNode = createGraphNode({
  key: 'firebase-app',
  get: async () => {
    await importForInteractive();

    const firebaseApp = (await import('firebase/app')).default;

    if (firebaseApp.apps.length) {
      return firebaseApp.app();
    }

    return firebaseApp.initializeApp(FIREBASE_CONFIG);
  },
});
