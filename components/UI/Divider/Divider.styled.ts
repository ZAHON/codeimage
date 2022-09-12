import styled from 'styled-components';

export const DividerRoot = styled.div`
  width: 100%;

  &:empty {
    height: 1px;
    background-color: var(--color-border);
  }

  &:not(:empty) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &::before,
    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background-color: var(--color-border);
    }

    &::before {
      margin-right: 10px;
    }

    &::after {
      margin-left: 10px;
    }
  }
`;

export const DividerLabel = styled.span`
  cursor: default;
  user-select: none;
  line-height: 1.5em;
  font-size: 0.875rem;
  color: var(--color-foreground);
`;
