export type FrameProps = {
  height: number;
  width: number;
};

export type FrameRootProps = Required<Pick<FrameProps, 'height' | 'width'>>;
