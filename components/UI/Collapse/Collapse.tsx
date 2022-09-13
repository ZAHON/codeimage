import type { CollapseProps } from './Collapse.types';
import { CollapseRoot } from './Collapse.styled';
import { Collapse as ReactCollapse } from 'react-collapse';

export const Collapse = ({ isOpened, children }: CollapseProps) => (
  <CollapseRoot>
    <ReactCollapse isOpened={isOpened}>{children}</ReactCollapse>
  </CollapseRoot>
);
