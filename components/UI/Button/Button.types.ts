import type { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  fullWidth?: boolean;
  onClick: () => void;
};

export type ButtonRootProps = Required<Pick<ButtonProps, 'fullWidth'>>;
