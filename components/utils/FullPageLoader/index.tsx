// ANCHOR Geist
import { Col, Spacer } from '@geist-ui/react';

// ANCHOR Components
import { Loader } from '@medion/components/utils/Loader';
import { Logo } from '@medion/components/utils/Logo';
import { constant } from '../Constant';

export const FullPageLoader = constant(
  () => (
    <div className="w-full h-screen grid justify-center items-center">
      <Col>
        <Logo width="128px" height="128px" />
        <Spacer y={0.5} />
        <Loader size="large" />
      </Col>
    </div>
  ),
);
