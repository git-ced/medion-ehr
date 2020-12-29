// ANCHOR Geist
import { Spacer, Text, useTheme } from '@geist-ui/react';

// ANCHOR Next
import { useRouter } from 'next/router';

// ANCHOR Utils
import { ISidebarItem } from '@medion/utils/types/sidebar';

// ANCHOR Components
import { MedionLink } from '../MedionLink';

export function SidebarItem({ Icon, label, href }: ISidebarItem) {
  const router = useRouter();
  const theme = useTheme();

  const isActive = router.pathname === href;
  const background = isActive ? 'bg-blue-100' : '';

  return (
    <MedionLink
      href={href}
      className={`w-full px-0 rounded ${background}`}
    >
      <div className="w-full flex items-center px-4 py-3">
        <Icon
          size={24}
          color={isActive
            ? theme.palette.foreground
            : theme.palette.secondary}
        />
        <Spacer x={1} />
        <Text
          p
          b
          className="m-0"
          type={isActive ? 'default' : 'secondary'}
        >
          {label}
        </Text>
      </div>
    </MedionLink>
  );
}
