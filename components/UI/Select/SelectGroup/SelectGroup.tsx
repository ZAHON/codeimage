import type { SelectGroupProps } from './SelectGroup.types';
import { Group as SelectGroupRoot } from '@radix-ui/react-select';
import { SelectLabel } from './SelectGroup.styled';

export const SelectGroup = ({ label, children }: SelectGroupProps) => (
  <SelectGroupRoot>
    <SelectLabel>{label}</SelectLabel>
    {children}
  </SelectGroupRoot>
);
