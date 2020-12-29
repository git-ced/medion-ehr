// ANCHOR Geist
import { Avatar, Spacer } from '@geist-ui/react';

// ANCHOR Geist Icons
import { Bell } from '@geist-ui/react-icons';

// ANCHOR Components
import { constant } from '@medion/components/utils/Constant';

export const NavbarRightWithAuth = constant(
  () => (
    // TODO Add real auth data
    <div className="flex items-center">
      <Bell size={28} />
      <Spacer x={1.5} />
      <Avatar size={40} src="https://gravatar.com/avatar/ad7e2bfdc967638cc610b51435fda2711?s=32&d=retro" />
    </div>
  ),
);
