import type { ReactNode } from 'react';

export type ScrollAreaProps = {
  type?: 'auto' | 'always' | 'scroll' | 'hover';
  padding?: string;
  justify?: 'center' | 'flex-start' | 'flex-end';
  children: ReactNode;
};

export type ScrollAreaRootProps = Required<Pick<ScrollAreaProps, 'padding'>>;

export type ScrollAreaContentProps = Required<Pick<ScrollAreaProps, 'justify'>>;
