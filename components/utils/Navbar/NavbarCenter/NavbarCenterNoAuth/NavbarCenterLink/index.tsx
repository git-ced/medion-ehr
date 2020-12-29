// ANCHOR React
import { memo } from 'react';

// ANCHOR Geist
import { Text } from '@geist-ui/react';

// ANCHOR Components
import { MedionLink } from '@medion/components/utils/MedionLink';

interface IProps {
  href: string;
  label: string;
}

export const NavbarCenterLink = memo(
  ({ href, label }: IProps) => (
    <MedionLink color href={href}>
      <Text className="m-0">{label}</Text>
    </MedionLink>
  ),
);
