/* eslint-disable import/no-default-export */
// ANCHOR Geist
import { Row, Text } from '@geist-ui/react';

// ANCHOR Components
import { AppHead } from '@medion/components/utils/AppHead';

export default function NotFoundPage() {
  return (
    <>
      <AppHead
        title="Medion | Not Found"
        description="The page you are looking for does not exist"
      />
      <Row
        justify="center"
        align="middle"
        className="w-full h-screen flex"
      >
        <Text b size="3rem">
          404 Page Not Found
        </Text>
      </Row>
    </>
  );
}
