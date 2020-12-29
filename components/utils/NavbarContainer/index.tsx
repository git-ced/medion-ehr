// ANCHOR React
import { ReactNode } from 'react';

// ANCHOR Geist
import { Row } from '@geist-ui/react';

interface IProps {
  children: ReactNode;
}

export function NavbarContainer({ children }: IProps) {
  return (
    <div>
      <nav className="bg-main navbar">
        <Row className="w-full">
          {children}
        </Row>
      </nav>
    </div>
  );
}
