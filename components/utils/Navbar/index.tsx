// ANCHOR Components
import { constant } from '../Constant';
import { NavbarCenter } from './NavbarCenter';
import { NavbarContainer } from '../NavbarContainer';
import { NavbarLeft } from './NavbarLeft';
import { NavbarRight } from './NavbarRight';

export const Navbar = constant(
  () => (
    <NavbarContainer>
      <div className="w-left">
        <NavbarLeft />
      </div>
      <div className="w-right flex justify-between items-center">
        <NavbarCenter />
        <NavbarRight />
      </div>
    </NavbarContainer>
  ),
);
