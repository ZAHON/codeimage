import type { DividerProps } from './Divider.types';
import { DividerRoot, DividerLabel } from './Divider.styled';

export const Divider = ({ label }: DividerProps) => (
  <DividerRoot role="separator">{label && <DividerLabel>{label}</DividerLabel>}</DividerRoot>
);
