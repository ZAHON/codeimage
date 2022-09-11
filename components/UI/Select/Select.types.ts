import type { ReactNode } from 'react';

export type SelectProps = {
  id: string;
  value: string;
  children: ReactNode;
  disabled?: boolean;
  onChange: (value: string) => void;
};
