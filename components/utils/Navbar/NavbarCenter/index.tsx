// ANCHOR Geist
import { Row } from '@geist-ui/react';

// ANCHOR Nodes
import { useAuthToken } from '@medion/nodes/firebase/auth/auth-token-node';

// ANCHOR Components
import { constant } from '@medion/components/utils/Constant';
import { NavbarCenterNoAuth } from './NavbarCenterNoAuth';
import { NavbarCenterWithAuth } from './NavbarCenterWithAuth';

export const NavbarCenter = constant(
  () => {
    const token = useAuthToken();

    return (
      <Row className="w-full">
        {
          token
            ? <NavbarCenterWithAuth />
            : <NavbarCenterNoAuth />
        }
      </Row>
    );
  },
);
