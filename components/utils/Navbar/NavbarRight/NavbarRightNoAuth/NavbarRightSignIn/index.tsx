// ANCHOR Geist
import { Button } from '@geist-ui/react';

// ANCHOR Components
import { constant } from '@medion/components/utils/Constant';

// ANCHOR Constants
import { LABEL } from './constants';

export const NavbarRightSignIn = constant(
  () => {
    // TODO Add Show Sign In Modal
    // eslint-disable-next-line no-alert
    const onClick = (() => alert('clicked'));

    return (
      <Button
        onClick={onClick}
        type="abort"
        className="minimal mr-4"
        auto
      >
        {LABEL.en}
      </Button>
    );
  },
);
