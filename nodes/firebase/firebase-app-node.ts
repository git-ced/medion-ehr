// ANCHOR Graph State
import { createGraphNode } from 'graph-state';

// ANCHOR Import Scheduler
import { importForInteractive } from 'import-scheduler';

// ANCHOR Utils
import { FIREBASE_CONFIG } from '@medion/utils/config/firebase';
import { IS_SERVER } from '@medion/utils/config/status';

export const firebaseAppNode = createGraphNode({
  key: 'firebase-app',
  get: async () => {
    if (IS_SERVER) {
      return undefined;
    }

    await importForInteractive();

    const firebaseApp = (await import('firebase/app')).default;

    if (firebaseApp.apps.length) {
      return firebaseApp.app();
    }

    return firebaseApp.initializeApp(FIREBASE_CONFIG);
  },
});
