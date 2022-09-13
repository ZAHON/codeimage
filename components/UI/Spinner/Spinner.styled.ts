import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to { transform: rotate(360deg) }
`;

export const SpinnerRoot = styled.div`
  --spinner-size: 44px;
  --spinner-border: 4px;

  width: var(--spinner-size);
  height: var(--spinner-size);
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  position: relative;
  border-radius: 50%;
  background-color: transparent;

  i {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    border-top: var(--spinner-border) solid transparent;
    border-left: var(--spinner-border) solid transparent;
    border-right: var(--spinner-border) solid transparent;
  }

  i:nth-of-type(1) {
    border-bottom: var(--spinner-border) solid var(--color-primary);
    animation: ${rotate} 0.8s ease infinite;
  }

  i:nth-of-type(2) {
    border-bottom: var(--spinner-border) dotted var(--color-primary);
    opacity: 0.5;
    animation: ${rotate} 0.8s linear infinite;
  }
`;
