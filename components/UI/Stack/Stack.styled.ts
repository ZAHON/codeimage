import type { StackRootProps } from './Stack.types';
import styled from 'styled-components';

export const StackRoot = styled.div<StackRootProps>`
  height: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ spacing }) => spacing};
`;
