// ANCHOR React
import { memo } from 'react';

// ANCHOR Next
import NextImage from 'next/image';

// ANCHOR Constants
import { LOGO_ALT, LOGO_SOURCE } from '@medion/utils/constants';

interface IProps {
  width?: string | number;
  height?: string | number;
}

export const Logo = memo(
  ({
    width = 'auto',
    height = 'auto',
  }: IProps) => (
    <div className="content-center justify-center">
      <NextImage
        src={LOGO_SOURCE}
        alt={LOGO_ALT}
        width={width}
        height={height}
        loading="eager"
      />
    </div>
  ),
);
