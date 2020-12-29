// ANCHOR Geist Icons
import {
  Display,
  Calendar,
  Folder,
  User,
} from '@geist-ui/react-icons';

// ANCHOR Utils
import { ISidebarItem } from '@medion/utils/types/sidebar';

export const SIDEBAR_MAIN_ITEMS: ISidebarItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    Icon: Display,
  },
  {
    label: 'Patients',
    href: '/patient',
    Icon: User,
  },
  {
    label: 'Records',
    href: '/record',
    Icon: Folder,
  },
  {
    label: 'Appointments',
    href: '/appointment',
    Icon: Calendar,
  },
];
