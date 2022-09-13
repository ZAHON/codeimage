import { ScrollAreaRootProps, ScrollAreaContentProps } from './ScrollArea.types';
import styled from 'styled-components';
import { Root, Viewport, Scrollbar, Thumb, Corner } from '@radix-ui/react-scroll-area';

export const ScrollAreaRoot = styled(Root)<ScrollAreaRootProps>`
  padding: ${({ padding }) => padding};
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ScrollAreaViewport = styled(Viewport)`
  padding: 4px;
  width: 100%;
  height: 100%;
`;

export const ScrollAreaContent = styled.div<ScrollAreaContentProps>`
  display: flex;
  width: 100%;
  justify-content: ${({ justify }) => justify};
`;

export const ScrollAreaScrollbar = styled(Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  padding: 2px;
  background-color: transparent;

  &[data-orientation='vertical'] {
    width: 10px;
  }

  &[data-orientation='horizontal'] {
    flex-direction: column;
    height: 10px;
  }
`;

export const ScrollAreaThumb = styled(Thumb)`
  flex: 1;
  background-color: var(--color-gray-700);
  border-radius: 10px;
  position: relative;
  transition: background-color 0.15s ease-out;

  &:hover {
    background-color: var(--color-gray-800);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 10px;
    min-height: 10px;
  }
`;

export const ScrollAreaCorner = styled(Corner)`
  background-color: transparent;
`;
