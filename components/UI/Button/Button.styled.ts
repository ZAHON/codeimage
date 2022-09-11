import { ButtonRootProps } from './Button.types';
import styled from 'styled-components';

export const ButtonRoot = styled.button<ButtonRootProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  padding: 0 0.625rem;
  height: 2rem;
  border: none;
  border-radius: 9px;
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  min-width: 9rem;
  background-color: var(--color-primary);
  color: hsl(0, 0%, 100%);
  font-weight: 500;
  font-size: 0.875rem;
  transform-origin: center;
  transition: background-color 0.25s ease, transform 0.25s ease;

  &:disabled {
    cursor: not-allowed;
    color: var(--color-gray-700);
    background-color: var(--color-gray-100);
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: 2px solid var(--color-primary);
  }

  &:hover:not(:disabled) {
    background-color: var(--color-blue-700);
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }
`;

export const ButtonIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
