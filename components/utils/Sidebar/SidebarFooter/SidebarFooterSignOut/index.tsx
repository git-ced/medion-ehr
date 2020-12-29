// ANCHOR Geist Icons
import { LogOut } from '@geist-ui/react-icons';

// ANCHOR Components
import { constant } from '@medion/components/utils/Constant';
import { SidebarButtonItem } from '@medion/components/utils/SidebarButtonItem';
import { useAuthSignOut } from '@medion/utils/hooks/firebase/useAuthSignOut';

// ANCHOR Constants
import { LABEL } from './constants';

export const SidebarFooterSignOut = constant(
  () => {
    const signOut = useAuthSignOut();

    return (
      <SidebarButtonItem
        label={LABEL.en}
        onClick={signOut}
        Icon={LogOut}
      />
    );
  },
);
