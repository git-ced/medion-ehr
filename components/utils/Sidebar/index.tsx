// ANCHOR Components
import { constant } from '../Constant';
import { SidebarContainer } from '../SidebarContainer';
import { SidebarFooter } from './SidebarFooter';
import { SidebarHospital } from './SidebarHospital';
import { SidebarMain } from './SidebarMain';

export const Sidebar = constant(
  () => (
    <SidebarContainer>
      <div className="flex flex-col justify-between h-full">
        <div>
          <SidebarMain />
          <SidebarHospital />
        </div>
        <SidebarFooter />
      </div>
    </SidebarContainer>
  ),
);
