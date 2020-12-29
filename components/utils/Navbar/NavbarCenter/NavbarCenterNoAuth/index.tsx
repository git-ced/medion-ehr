// ANCHOR Components
import { constant } from '@medion/components/utils/Constant';
import { NavbarCenterLink } from './NavbarCenterLink';

export const NavbarCenterNoAuth = constant(
  () => (
    <div className="grid grid-cols-4 gap-8">
      <NavbarCenterLink href="/" label="Home" />
      <NavbarCenterLink href="/about" label="About" />
      <NavbarCenterLink href="/pricing" label="Pricing" />
      <NavbarCenterLink href="/contact" label="Contact" />
    </div>
  ),
);
