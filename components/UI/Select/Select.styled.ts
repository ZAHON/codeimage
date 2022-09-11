import styled from 'styled-components';
import {
  Trigger,
  Value,
  Icon,
  Portal,
  Content,
  ScrollUpButton,
  ScrollDownButton,
  Viewport,
} from '@radix-ui/react-select';

export const SelectTrigger = styled(Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.625rem;
  width: 100%;
  border: none;
  cursor: pointer;
  background-color: var(--color-gray-50);
  line-height: 1em;
  height: 2rem;
  font-size: 0.875rem;
  border-radius: 9px;

  &[data-disabled] {
    cursor: not-allowed;
    color: var(--color-gray-700);
    background-color: var(--color-gray-100);
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: 2px solid var(--color-primary);
  }
`;

export const SelectValue = styled(Value)``;

export const SelectIcon = styled(Icon)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectPortal = styled(Portal)``;

export const SelectContent = styled(Content)`
  overflow: hidden;
  border-radius: 9px;
  background-color: var(--color-background-contrast);
  box-shadow: var(--shadow-lg);
`;

export const SelectScrollUpButton = styled(ScrollUpButton)`
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectScrollDownButton = styled(ScrollDownButton)`
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectViewport = styled(Viewport)`
  padding: 0.625rem;
  width: 100%;
  height: 100%;
`;
