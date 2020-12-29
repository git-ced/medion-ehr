// ANCHOR Geist
import {
  Button,
  Spacer,
  Text,
  useTheme,
} from '@geist-ui/react';

// ANCHOR Utils
import { GeistIcon } from '@medion/utils/types/geist-icons';

interface IProps {
  Icon: GeistIcon;
  label: string;
  onClick?: () => any;
}

export function SidebarButtonItem({ Icon, label, onClick }: IProps) {
  const theme = useTheme();

  return (
    <Button
      type="abort"
      onClick={onClick}
      className="w-0 m-0 flex justify-start px-4 py-3"
    >
      <Icon
        size={24}
        color={theme.palette.secondary}
      />
      <Spacer x={1} />
      <Text
        p
        b
        className="m-0"
        type="secondary"
      >
        {label}
      </Text>
    </Button>
  );
}
