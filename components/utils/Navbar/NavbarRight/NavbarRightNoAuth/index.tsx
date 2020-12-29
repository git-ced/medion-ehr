// ANCHOR Components
import { constant } from '@medion/components/utils/Constant';
import { NavbarRightSignIn } from './NavbarRightSignIn';
import { NavbarRightSignUp } from './NavbarRightSignUp';

export const NavbarRightNoAuth = constant(
  () => (
    <div className="flex">
      <NavbarRightSignIn />
      <NavbarRightSignUp />
    </div>
  ),
);
