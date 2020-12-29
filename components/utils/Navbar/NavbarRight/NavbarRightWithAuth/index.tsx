// ANCHOR Geist
import { Avatar, Spacer } from '@geist-ui/react';

// ANCHOR Geist Icons
import { Bell } from '@geist-ui/react-icons';

// ANCHOR Nodes
import { useAuthState } from '@medion/nodes/firebase/auth/auth-state-node';

// ANCHOR Skeleton
import Skeleton from 'react-loading-skeleton';

// ANCHOR Components
import { constant } from '@medion/components/utils/Constant';

export const NavbarRightWithAuth = constant(
  () => {
    const user = useAuthState();

    return (
      <div className="flex items-center">
        <Bell size={28} />
        <Spacer x={1.5} />
        {
          user
            ? <Avatar size={40} src={`https://gravatar.com/avatar/${user.uid}?s=32&d=retro`} />
            : <Skeleton circle height={40} width={40} />
        }
      </div>
    );
  },
);
