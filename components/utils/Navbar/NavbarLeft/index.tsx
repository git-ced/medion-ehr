// ANCHOR Geist
import { Row, Spacer, Text } from '@geist-ui/react';

// ANCHOR Components
import { constant } from '@medion/components/utils/Constant';
import { Logo } from '@medion/components/utils/Logo';

// ANCHOR Constants
import { LOGO_ALT } from '@medion/utils/constants';

export const NavbarLeft = constant(
  () => (
    <Row className="flex items-center">
      <Logo width="64px" height="64px" />
      <Spacer x={0.5} />
      <div className="flex flex-col justify-center">
        <Text h1 size={20} className="leading-none m-0">
          {LOGO_ALT}
        </Text>
        {/* TODO: Add Auth Logic */}
        {/* <Text b p size={14} className="m-0 leading-none" type="secondary">
          Las Pinas Doctors
        </Text> */}
      </div>
    </Row>
  ),
);
