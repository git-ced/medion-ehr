// ANCHOR Geist
import { Row } from '@geist-ui/react';

// ANCHOR Components
import { constant } from '@medion/components/utils/Constant';
import { NavbarCenterNoAuth } from './NavbarCenterNoAuth';
import { NavbarCenterWithAuth } from './NavbarCenterWithAuth';

export const NavbarCenter = constant(
  () => {
    const token = true;

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
