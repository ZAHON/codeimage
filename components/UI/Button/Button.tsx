import type { ButtonProps } from './Button.types';
import { ButtonRoot, ButtonIcon } from './Button.styled';

export const Button = (props: ButtonProps) => {
  const { children, icon, type = 'button', disabled = false, fullWidth = false, onClick } = props;

  return (
    <ButtonRoot type={type} disabled={disabled} fullWidth={fullWidth} onClick={onClick}>
      {icon && <ButtonIcon>{icon}</ButtonIcon>}
      <span>{children}</span>
    </ButtonRoot>
  );
};
