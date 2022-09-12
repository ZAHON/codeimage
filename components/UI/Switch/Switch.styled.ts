import styled from 'styled-components';
import { Root, Thumb } from '@radix-ui/react-switch';

export const SwitchRoot = styled(Root)`
  --switch-height: 1.5rem;
  --switch-width: 2.5rem;

  position: relative;
  height: var(--switch-height);
  width: var(--switch-width);
  border-radius: 9999px;
  border: none;
  background-color: var(--color-gray-200);
  cursor: pointer;
  transition: background-color 0.25s ease;

  &[data-state='checked']:hover {
    background-color: var(--color-blue-700);
  }

  &[data-state='unchecked']:active > span {
    transform: translateX(calc(var(--switch-width) / 7.5));
    width: calc(var(--switch-height) * 0.7 + (var(--switch-width) / 10));
  }

  &[data-state='checked']:active > span {
    transform: translateX(
      calc(
        var(--switch-width) - var(--switch-width) / 7.5 - var(--switch-width) / 10 -
          var(--switch-height) * 0.7
      )
    );
    width: calc(var(--switch-height) * 0.7 + (var(--switch-width) / 10));
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: 2px solid var(--color-primary);
  }

  &[data-state='checked'] {
    background-color: var(--color-primary);
  }
`;

export const SwitchThumb = styled(Thumb)`
  position: absolute;
  left: 0;
  top: calc(50% - var(--switch-height) * 0.35);
  transform: translateX(calc(var(--switch-width) / 15));
  height: calc(var(--switch-height) * 0.7);
  width: calc(var(--switch-height) * 0.7);
  background-color: var(--color-background);
  border-radius: 9999px;
  transition: transform 0.25s ease, width 0.2s ease;

  &[data-state='checked'] {
    transform: translateX(
      calc(var(--switch-width) - var(--switch-width) / 15 - var(--switch-height) * 0.7)
    );
  }
`;
