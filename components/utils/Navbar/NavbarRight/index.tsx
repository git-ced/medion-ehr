// ANCHOR Geist
import { Row } from '@geist-ui/react';

// ANCHOR Nodes
import { useAuthToken } from '@medion/nodes/firebase/auth/auth-token-node';

// ANCHOR Components
import { constant } from '@medion/components/utils/Constant';
import { NavbarRightNoAuth } from './NavbarRightNoAuth';
import { NavbarRightWithAuth } from './NavbarRightWithAuth';

export const NavbarRight = constant(
  () => {
    const token = useAuthToken();

    return (
      <Row>
        {
          token
            ? <NavbarRightWithAuth />
            : <NavbarRightNoAuth />
        }
      </Row>
    );
  },
);
