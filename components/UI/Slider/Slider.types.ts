export type SliderProps = {
  value: number;
  id: string;
  min?: number;
  max?: number;
  step?: number;
  ariaLabel: string;
  onChange: (value: number) => void;
};
