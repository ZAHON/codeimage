import type { TooltipProps } from './Tooltip.types';
import {
  Root as TooltipRoot,
  Trigger as TooltipTrigger,
  Portal as TooltipPortal,
} from '@radix-ui/react-tooltip';
import { TooltipContent, TooltipArrow } from './Tooltip.styled';

export const Tooltip = ({
  children,
  content,
  delayDuration = 0,
  side = 'top',
  align = 'center',
}: TooltipProps) => (
  <TooltipRoot delayDuration={delayDuration}>
    <TooltipTrigger asChild>
      <div>{children}</div>
    </TooltipTrigger>
    <TooltipPortal>
      <TooltipContent side={side} align={align} sideOffset={4}>
        {content}
        <TooltipArrow />
      </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
);
