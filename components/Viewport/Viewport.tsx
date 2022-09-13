import { useState, useRef } from 'react';
import { FocusCentered, ZoomReset } from 'tabler-icons-react';
import { ViewportRoot, ViewportContent, ViewportFooter } from './Viewport.styled';
import { ScrollArea, Slider, ActionIcon, Tooltip } from '@/components/UI/.';
import { Frame } from '@/components/Frame/Frame';

export const Viewport = () => {
  const [zoom, setZoom] = useState(100);
  const viewportContentRef = useRef<HTMLDivElement>(null);

  const centerViewport = () => {
    if (viewportContentRef.current === null) {
      return;
    }

    viewportContentRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  return (
    <ViewportRoot>
      <ScrollArea type="always" padding="2rem" justify="center">
        <ViewportContent ref={viewportContentRef} zoom={zoom}>
          <Frame height={1280} width={4280}></Frame>
        </ViewportContent>
      </ScrollArea>
      <ViewportFooter>
        <Tooltip content="Center viewport" align="start" side="top">
          <ActionIcon ariaLabel="center viewport" onClick={centerViewport}>
            <FocusCentered size={18} />
          </ActionIcon>
        </Tooltip>
        <Slider
          id="zoom-slider"
          ariaLabel="zoom slider"
          min={1}
          max={100}
          value={zoom}
          onChange={setZoom}
        />
        <Tooltip content="Reset zoom" align="end" side="top">
          <ActionIcon ariaLabel="reset zoom" onClick={() => setZoom(100)}>
            <ZoomReset size={18} />
          </ActionIcon>
        </Tooltip>
      </ViewportFooter>
    </ViewportRoot>
  );
};
