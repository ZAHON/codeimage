import styled from 'styled-components';
import { Item } from '@radix-ui/react-select';

export const SelectItemRoot = styled(Item)`
  user-select: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.75rem;
  line-height: 1em;
  height: 2rem;
  font-size: 0.875rem;
  border-radius: 9px;
  transition: background-color 0.1s ease, transform 0.25s ease;

  &[data-disabled] {
    cursor: not-allowed;
    color: var(--color-gray-700);
  }

  &:active:not(&[data-disabled]) {
    transform: scale(0.97);
  }

  &[data-state='checked'] {
    font-weight: 500;
    color: hsl(0, 0%, 100%);
    background-color: var(--color-primary);
    outline: none;
  }

  &[data-highlighted]:not(&[data-state='checked']) {
    background-color: var(--color-gray-100);
    outline: none;
  }
`;
