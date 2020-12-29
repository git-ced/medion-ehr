// ANCHOR Geist
import { Row } from '@geist-ui/react';

// ANCHOR Components
import { constant } from '@medion/components/utils/Constant';
import { NavbarRightNoAuth } from './NavbarRightNoAuth';
import { NavbarRightWithAuth } from './NavbarRightWithAuth';

export const NavbarRight = constant(
  () => {
    const token = false;

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
