import type { FrameRootProps } from './Frame.types';
import styled from 'styled-components';

export const FrameRoot = styled.div<FrameRootProps>`
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};

  background: linear-gradient(to right, #ff00cc, #333399);
`;
