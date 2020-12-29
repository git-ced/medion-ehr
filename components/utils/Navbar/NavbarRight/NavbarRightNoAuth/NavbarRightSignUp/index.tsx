// ANCHOR Geist
import { Button } from '@geist-ui/react';

// ANCHOR Components
import { constant } from '@medion/components/utils/Constant';
import { MedionLink } from '@medion/components/utils/MedionLink';

// ANCHOR Constants
import { LABEL } from './constants';

export const NavbarRightSignUp = constant(
  () => (
    <MedionLink href="/sign-up">
      <Button type="secondary" auto>
        {LABEL.en}
      </Button>
    </MedionLink>
  ),
);
