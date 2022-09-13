import styled from 'styled-components';

export const CollapseRoot = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    .ReactCollapse--collapse {
      transition: height 200ms ease;
    }
  }
`;
