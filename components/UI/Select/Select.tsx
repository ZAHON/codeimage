import type { SelectProps } from './Select.types';
import { Selector, ChevronUp, ChevronDown } from 'tabler-icons-react';
import { Root as SelectRoot } from '@radix-ui/react-select';
import {
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectViewport,
} from './Select.styled';

export const Select = ({ id, value, children, disabled = false, onChange }: SelectProps) => (
  <SelectRoot value={value} onValueChange={onChange}>
    <SelectTrigger id={id} disabled={disabled}>
      <SelectValue />
      <SelectIcon>
        <Selector size={16} />
      </SelectIcon>
    </SelectTrigger>

    <SelectPortal>
      <SelectContent>
        <SelectScrollUpButton>
          <ChevronUp size={16} />
        </SelectScrollUpButton>
        <SelectViewport>{children}</SelectViewport>
        <SelectScrollDownButton>
          <ChevronDown size={16} />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
);

// <Select.Root>
// <Select.Trigger>
// 	<Select.Value />
// 	<Select.Icon />
// </Select.Trigger>

// <Select.Portal>
// 	<Select.Content>
// 		<Select.ScrollUpButton />
// 		<Select.Viewport>
// 			<Select.Item>
// 				<Select.ItemText />
// 				<Select.ItemIndicator />
// 			</Select.Item>

// 			<Select.Group>
// 				<Select.Label />
// 				<Select.Item>
// 					<Select.ItemText />
// 					<Select.ItemIndicator />
// 				</Select.Item>
// 			</Select.Group>

// 			<Select.Separator />
// 		</Select.Viewport>
// 		<Select.ScrollDownButton />
// 	</Select.Content>
// </Select.Portal>
// </Select.Root>
