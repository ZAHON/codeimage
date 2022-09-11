import styled, { keyframes } from 'styled-components';
import { Content, Arrow } from '@radix-ui/react-tooltip';

const slideUpAndFade = keyframes`
  0% { opacity: 0; transform: translateY(2px) }
  100% { opacity: 1; transform: translateY(0) }
`;

const slideRightAndFade = keyframes`
  0% { opacity: 0; transform: translateX(-2px) }
  100% { opacity: 1; transform: translateX(0) }
`;

const slideDownAndFade = keyframes`
  0% { opacity: 0; transform: translateY(-2px) }
  100% { opacity: 1; transform: translateY(0) }
`;

const slideLeftAndFade = keyframes`
  0% { opacity: 0; transform: translateX(2px) }
  100% { opacity: 1; transform: translateX(0) }
`;

export const TooltipArrow = styled(Arrow)`
  fill: var(--color-background-contrast);
`;

export const TooltipContent = styled(Content)`
  font-size: 15px;
  line-height: 1em;
  cursor: default;
  user-select: none;
  border-radius: 9px;
  padding: 0.375rem 0.75rem;
  background-color: var(--color-background-contrast);
  box-shadow: var(--shadow-lg);

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: 0.5s;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
    &[data-state='delayed-open'] {
      &[data-side='top'] {
        animation-name: ${slideDownAndFade};
      }

      &[data-side='right'] {
        animation-name: ${slideLeftAndFade};
      }

      &[data-side='bottom'] {
        animation-name: ${slideUpAndFade};
      }

      &[data-side='left'] {
        animation-name: ${slideRightAndFade};
      }
    }
  }
`;
