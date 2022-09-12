import type { ReactNode } from 'react';

export type StackProps = {
  direction?: 'row' | 'column';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end';
  spacing?: string;
  children: ReactNode;
};

export type StackRootProps = Required<
  Pick<StackProps, 'direction' | 'justify' | 'align' | 'spacing'>
>;
