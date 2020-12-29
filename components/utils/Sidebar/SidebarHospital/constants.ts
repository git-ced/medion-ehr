// ANCHOR Geist Icons
import {
  Display,
  Folder,
  User,
} from '@geist-ui/react-icons';

// ANCHOR Utils
import { ISidebarItem } from '@medion/utils/types/sidebar';

export const SIDEBAR_HOSPITAL_ITEMS: ISidebarItem[] = [
  {
    label: 'Dashboard',
    href: '/hospital/dashboard',
    Icon: Display,
  },
  {
    label: 'Patients',
    href: '/hospital/patient',
    Icon: User,
  },
  {
    label: 'Records',
    href: '/hospital/record',
    Icon: Folder,
  },
];
