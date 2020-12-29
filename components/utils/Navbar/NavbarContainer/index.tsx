// ANCHOR React
import { ReactNode } from 'react';

// ANCHOR Geist
import { Row } from '@geist-ui/react';

interface IProps {
  children: ReactNode;
}

export function NavbarContainer({ children }: IProps) {
  return (
    <div className="bg-main h-20 px-8 flex items-center rounded-b shadow">
      <Row className="w-full">
        {children}
      </Row>
    </div>
  );
}
