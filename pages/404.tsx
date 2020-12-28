/* eslint-disable import/no-default-export */
// ANCHOR Geist
import { Row, Text } from '@geist-ui/react';

export default function NotFoundPage() {
  return (
    <Row
      justify="center"
      align="middle"
      className="w-full h-screen flex"
    >
      <Text b size="3rem">
        404 Page Not Found
      </Text>
    </Row>
  );
}
