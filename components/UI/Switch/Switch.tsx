import type { SwitchProps } from './Switch.types';
import { SwitchRoot, SwitchThumb } from './Switch.styled';

export const Switch = ({ id, checked, disabled = false, onChange }: SwitchProps) => (
  <SwitchRoot id={id} checked={checked} disabled={disabled} onCheckedChange={onChange}>
    <SwitchThumb />
  </SwitchRoot>
);
