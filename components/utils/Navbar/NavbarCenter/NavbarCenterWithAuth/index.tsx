// ANCHOR Geist
import { Spacer } from '@geist-ui/react';

// ANCHOR Geist Icons
import { Search } from '@geist-ui/react-icons';

// ANCHOR Components
import { constant } from '@medion/components/utils/Constant';

// ANCHOR Constants
import { NavbarCenterSearch } from './NavbarCenterSearch';

export const NavbarCenterWithAuth = constant(
  () => (
    <div className="flex w-full items-center">
      <Search size={28} />
      <Spacer x={1} />
      <NavbarCenterSearch />
    </div>
  ),
);
