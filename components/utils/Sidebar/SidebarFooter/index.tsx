// ANCHOR Components
import { constant } from '../../Constant';
import { SidebarItem } from '../../SidebarItem';
import { SidebarFooterSignOut } from './SidebarFooterSignOut';

// ANCHOR Constants
import { SIDEBAR_FOOTER_ITEMS } from './constants';

export const SidebarFooter = constant(
  () => (
    <div className="grid gap-1">
      {
        SIDEBAR_FOOTER_ITEMS.map((item, index) => (
          <SidebarItem
            key={index}
            label={item.label}
            href={item.href}
            Icon={item.Icon}
          />
        ))
      }
      <SidebarFooterSignOut />
    </div>
  ),
);
