import styled from 'styled-components';

export const AppShellRoot = styled.div`
  height: 100vh;
`;

export const AppShellHeader = styled.div`
  height: 60px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
`;

export const AppShellNavbarToggler = styled.div`
  @media screen and (min-width: 650px) {
    display: none;
  }
`;

export const AppShellLogo = styled.div`
  display: none;

  @media screen and (min-width: 650px) {
    position: relative;
    display: flex;
    height: 60px;
    width: 270px;
    justify-content: center;
    align-items: center;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 100%;
      background-color: var(--color-border);
    }
  }
`;

export const AppShellContent = styled.div`
  display: flex;
  height: calc(100% - 60px);
`;

export const AppShellNavbar = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? 'calc(100% - 60px)' : '0')};

  background-color: var(--color-background);
  transition: height 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 650px) {
    position: static;
    width: 280px;
    height: 100%;
    border-right: 1px solid var(--color-border);
  }
`;

export const AppShellMain = styled.div`
  flex: 1;
`;
