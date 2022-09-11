import type { ActionIconProps } from './ActionIcon.types';
import { ActionIconRoot } from './ActionIcon.styled';

export const ActionIcon = (props: ActionIconProps) => {
  const { children, ariaLabel, disabled = false, onClick } = props;

  return (
    <ActionIconRoot aria-label={ariaLabel} disabled={disabled} onClick={onClick}>
      {children}
    </ActionIconRoot>
  );
};
