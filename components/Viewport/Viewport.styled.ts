import type { ViewportContentProps } from './Viewport.types';
import styled from 'styled-components';

export const ViewportRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ViewportContent = styled.div<ViewportContentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  scale: ${({ zoom }) => `${zoom}%`};
`;

export const ViewportFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;

  padding-inline: 10px;
  height: 60px;
  border-top: 1px solid var(--color-border);
`;
