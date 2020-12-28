// ANCHOR React
import { memo } from 'react';

// ANCHOR Geist
import { Justify } from '@geist-ui/react/dist/grid/grid-types';
import { Grid, Link } from '@geist-ui/react';

// ANCHOR Next
import NextLink from 'next/link';
import NextImage from 'next/image';

// ANCHOR Constants
import {
  HOMEPAGE_URL,
  LOGO_ALT,
  LOGO_SOURCE,
} from '@medion/utils/constants';

interface IProps {
  width?: string | number;
  height?: string | number;
  align?: Justify;
}

export const Logo = memo(
  ({
    width = 'auto',
    height = 'auto',
    align = 'center',
  }: IProps) => (
    <Grid.Container
      alignContent="center"
      justify={align}
    >
      <NextLink href={HOMEPAGE_URL} passHref>
        <Link>
          <NextImage
            src={LOGO_SOURCE}
            alt={LOGO_ALT}
            width={width}
            height={height}
            loading="eager"
          />
        </Link>
      </NextLink>
    </Grid.Container>
  ),
);
