import type { LabelProps } from './Label.types';
import { LabelRoot } from './Label.styled';

export const Label = ({ htmlFor, children }: LabelProps) => (
  <LabelRoot htmlFor={htmlFor}>{children}</LabelRoot>
);
