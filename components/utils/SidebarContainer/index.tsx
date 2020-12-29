// ANCHOR React
import { ReactNode } from 'react';

// ANCHOR Geist
import { Row } from '@geist-ui/react';

interface IProps {
  children: ReactNode;
}

export function SidebarContainer({ children }: IProps) {
  return (
    <div className="w-left">
      <div className="bg-main sidebar">
        <Row className="w-full">
          {children}
        </Row>
      </div>
    </div>
  );
}
