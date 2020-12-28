// ANCHOR React
import React, { ReactNode } from 'react';

// ANCHOR Next
import dynamic from 'next/dynamic';

// ANCHOR User Agent
import { UserAgent } from 'next-useragent';

// ANCHOR Geist
import { CssBaseline, GeistProvider } from '@geist-ui/react';

// ANCHOR Graph State
import { useUserAgentHydrate } from '@medion/nodes/global/user-agent-node';

// ANCHOR Utils
import { isWebsiteRestricted } from '@medion/utils/functions/isWebsiteRestricted';

interface IGlobalProviderProps {
  children?: ReactNode;
  userAgent: UserAgent;
}

// ANCHOR Providers
const RootProvider = dynamic(
  async () => {
    const mod = await import('./Providers');
    return mod.RootProvider;
  },
);

// TODO Add Unsupported Page
// const MedionUnsupported = dynamic(
//   async () => {
//     const mod = await import('./unsupported');
//     return mod.MedionUnsupported;
//   },
// );

function InnerGlobalProvider({ children, userAgent }: IGlobalProviderProps) {
  if (isWebsiteRestricted(userAgent)) {
    return <p>Browser Unsupported</p>;
  }

  return (
    <RootProvider>
      {children}
    </RootProvider>
  );
}

export function GlobalProvider({ children, userAgent }: IGlobalProviderProps) {
  useUserAgentHydrate(userAgent);

  return (
    <GeistProvider theme={{ type: 'light' }}>
      <CssBaseline>
        <InnerGlobalProvider userAgent={userAgent}>
          {children}
        </InnerGlobalProvider>
      </CssBaseline>
    </GeistProvider>
  );
}
