// ANCHOR Geist
import { Input } from '@geist-ui/react';

// ANCHOR Components
import { constant } from '@medion/components/utils/Constant';

// ANCHOR Constants
import { PLACEHOLDER } from './constant';

export const NavbarCenterSearch = constant(
  () => (
    <Input
      placeholder={PLACEHOLDER.en}
      size="medium"
      width="80%"
      className="no-border"
    />
  ),
);
