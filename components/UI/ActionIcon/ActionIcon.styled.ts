import styled from 'styled-components';

export const ActionIconRoot = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  border: none;
  border-radius: 9px;
  cursor: pointer;
  color: var(--color-text);
  background-color: var(--color-gray-50);
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
    background-color: var(--color-gray-100);
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }
`;
