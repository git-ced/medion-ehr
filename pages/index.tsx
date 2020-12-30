/* eslint-disable import/no-default-export */
// ANCHOR Next
import dynamic from 'next/dynamic';

// ANCHOR Components
import { AppHead } from '@medion/components/utils/AppHead';
import { FullPageLoader } from '@medion/components/utils/FullPageLoader';
import { MedionPage } from '@medion/components/utils/MedionPage';

const MedionHome = dynamic<any>(
  () => (
    import('@medion/components/utils/FullPageLoader')
      .then((mod) => mod.FullPageLoader)
  ),
  {
    loading: () => <FullPageLoader />,
  },
);

export default function HomePage() {
  return (
    <>
      <AppHead
        title="Medion | Home"
        description="Join Medion EHR to efficiently deliver and manage healthcare to your patients"
      />
      <MedionPage hasNavbar hasSidebar>
        <MedionHome />
      </MedionPage>
    </>
  );
}
