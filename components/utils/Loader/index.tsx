// ANCHOR React
import { memo } from 'react';

// ANCHOR Geist
import { Loading } from '@geist-ui/react';

interface IProps {
  size: 'mini' | 'small' | 'medium' | 'large';
}

export const Loader = memo(
  ({ size }: IProps) => (
    <div className={`loading-${size}`}>
      <Loading size={size} type="secondary" />
    </div>
  ),
);
