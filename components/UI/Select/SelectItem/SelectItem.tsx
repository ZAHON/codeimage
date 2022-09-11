import { Check } from 'tabler-icons-react';
import type { SelectItemProps } from './SelectItem.types';
import {
  ItemText as SelectItemText,
  ItemIndicator as SelectItemIndicator,
} from '@radix-ui/react-select';
import { SelectItemRoot } from './SelectItem.styled';

export const SelectItem = ({ value, disabled = false, children }: SelectItemProps) => (
  <SelectItemRoot value={value} disabled={disabled}>
    <SelectItemText>{children}</SelectItemText>
    <SelectItemIndicator>
      <Check size={16} />
    </SelectItemIndicator>
  </SelectItemRoot>
);
