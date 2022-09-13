import type { FrameProps } from './Frame.types';
import { FrameRoot } from './Frame.styled';

export const Frame = ({ width, height }: FrameProps) => <FrameRoot width={width} height={height} />;
