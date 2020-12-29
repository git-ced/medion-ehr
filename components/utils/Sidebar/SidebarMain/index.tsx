// ANCHOR Components
import { constant } from '../../Constant';
import { SidebarItem } from '../../SidebarItem';

// ANCHOR Constants
import { SIDEBAR_MAIN_ITEMS } from './constants';

export const SidebarMain = constant(
  () => (
    <div className="grid gap-1">
      {
        SIDEBAR_MAIN_ITEMS.map((item, index) => (
          <SidebarItem
            key={index}
            label={item.label}
            href={item.href}
            Icon={item.Icon}
          />
        ))
      }
    </div>
  ),
);
