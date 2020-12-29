import { FunctionComponent, SVGProps } from 'react';

interface Props extends SVGProps<SVGElement> {
  color?: string;
  size?: number | string;
}

export type GeistIcon = FunctionComponent<Props>;
