import type { SliderProps } from './Slider.types';
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from './Slider.styled';

export const Slider = ({
  value,
  id,
  min = 1,
  max = 100,
  step = 1,
  ariaLabel,
  onChange,
}: SliderProps) => (
  <SliderRoot
    id={id}
    value={[value]}
    min={min}
    max={max}
    step={step}
    onValueChange={([value]) => onChange(value)}
    aria-label={ariaLabel}
  >
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
  </SliderRoot>
);
