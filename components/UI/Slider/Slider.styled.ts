import styled from 'styled-components';
import { Root, Track, Range, Thumb } from '@radix-ui/react-slider';

export const SliderRoot = styled(Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 100%;
  cursor: pointer;

  &[data-orientation='horizontal'] {
    height: 20px;
  }
`;

export const SliderTrack = styled(Track)`
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;
  background-color: var(--color-gray-200);

  &[data-orientation='horizontal'] {
    height: 3px;
  }
`;

export const SliderRange = styled(Range)`
  position: absolute;
  height: 100%;
  border-radius: 9999px;
  background-color: var(--color-primary);
`;

export const SliderThumb = styled(Thumb)`
  all: unset;
  display: block;
  height: 20px;
  width: 20px;
  background-color: var(--color-primary);
  box-shadow: var(--shadow-md);
  border-radius: 10px;
  transition: background-color 0.25s ease;

  &:hover {
    background-color: var(--color-blue-700);
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: 2px solid var(--color-primary);
  }
`;
