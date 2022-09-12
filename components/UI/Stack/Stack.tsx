import type { StackProps } from './Stack.types';
import { StackRoot } from './Stack.styled';

export const Stack = ({
  direction = 'column',
  justify = 'flex-start',
  align = 'flex-start',
  spacing = '10px',
  children,
}: StackProps) => (
  <StackRoot direction={direction} justify={justify} align={align} spacing={spacing}>
    {children}
  </StackRoot>
);
