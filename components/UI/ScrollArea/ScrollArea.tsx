import type { ScrollAreaProps } from './ScrollArea.types';
import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from './ScrollArea.styled';

export const ScrollArea = ({
  children,
  type = 'hover',
  padding = '0',
  justify = 'flex-start',
}: ScrollAreaProps) => (
  <ScrollAreaRoot type={type} padding={padding}>
    <ScrollAreaViewport>
      <ScrollAreaContent justify={justify}>{children}</ScrollAreaContent>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
);
