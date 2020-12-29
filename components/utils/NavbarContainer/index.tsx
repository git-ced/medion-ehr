// ANCHOR React
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export function NavbarContainer({ children }: IProps) {
  return (
    <div>
      <nav className="bg-main navbar">
        {children}
      </nav>
    </div>
  );
}
