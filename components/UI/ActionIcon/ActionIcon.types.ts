import type { ReactNode } from 'react';

export type ActionIconProps = {
  children: ReactNode;
  ariaLabel: string;
  disabled?: boolean;
  onClick: () => void;
};
