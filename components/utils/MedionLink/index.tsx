// ANCHOR React
import { ReactNode } from 'react';

// ANCHOR Geist
import { Link } from '@geist-ui/react';

// ANCHOR Next
import NextLink from 'next/link';

interface IProps {
  href: string;
  target?: string;
  color?: boolean;
  icon?: boolean;
  underline?: boolean;
  block?: boolean;
  children: ReactNode;
}

export function MedionLink({
  href,
  target,
  color,
  icon,
  underline,
  block,
  children,
}: IProps) {
  return (
    <NextLink href={href} passHref>
      <Link
        target={target}
        color={color}
        icon={icon}
        underline={underline}
        block={block}
      >
        {children}
      </Link>
    </NextLink>
  );
}
