// ANCHOR React
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export function SidebarContainer({ children }: IProps) {
  return (
    <div className="w-left">
      <div className="bg-main sidebar">
        {children}
      </div>
    </div>
  );
}
