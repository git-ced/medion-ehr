// ANCHOR Geist
import { Text } from '@geist-ui/react';

// ANCHOR Components
import { constant } from '../../Constant';
import { SidebarItem } from '../../SidebarItem';

// ANCHOR Constants
import { SIDEBAR_HOSPITAL_ITEMS } from './constants';

export const SidebarHospital = constant(
  () => (
    <div className="grid gap-1 mt-2">
      <Text p b small>Las Pinas Doctors</Text>
      {
        SIDEBAR_HOSPITAL_ITEMS.map((item, index) => (
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
