// ANCHOR Geist
import { Col } from '@geist-ui/react';

// ANCHOR Components
import { constant } from '../Constant';
import { NavbarCenter } from './NavbarCenter';
import { NavbarContainer } from './NavbarContainer';
import { NavbarLeft } from './NavbarLeft';
import { NavbarRight } from './NavbarRight';

export const Navbar = constant(
  () => (
    <NavbarContainer>
      <Col span={6}>
        <NavbarLeft />
      </Col>
      <Col span={18} className="flex justify-between items-center">
        <NavbarCenter />
        <NavbarRight />
      </Col>
    </NavbarContainer>
  ),
);
