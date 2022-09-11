import type { ReactNode } from 'react';

export type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
  delayDuration?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
};
