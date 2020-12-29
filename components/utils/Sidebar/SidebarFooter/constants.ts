// ANCHOR Geist Icons
import { Settings } from '@geist-ui/react-icons';

// ANCHOR Utils
import { ISidebarItem } from '@medion/utils/types/sidebar';

export const SIDEBAR_FOOTER_ITEMS: ISidebarItem[] = [
  {
    label: 'Settings',
    href: '/setting',
    Icon: Settings,
  },
];
