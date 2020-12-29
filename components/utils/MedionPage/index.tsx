// ANCHOR React
import { ReactNode } from 'react';

// ANCHOR Nodes
import { useAuthToken } from '@medion/nodes/firebase/auth/auth-token-node';

// ANCHOR Components
import { Navbar } from '../Navbar';
import { Sidebar } from '../Sidebar';

interface IProps {
  hasNavbar?: boolean;
  hasSidebar?: boolean;
  children?: ReactNode;
}

export function MedionPage({ hasNavbar, hasSidebar, children }: IProps) {
  const token = useAuthToken();

  return (
    <>
      {hasNavbar && <Navbar />}
      <section className="main">
        {hasSidebar && token && <Sidebar />}
        <div className={hasSidebar ? 'w-right' : 'w-full'}>
          <main>
            {children}
          </main>
        </div>
      </section>
    </>
  );
}
