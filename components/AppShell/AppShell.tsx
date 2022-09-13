import { useState } from 'react';
import {
  AppShellRoot,
  AppShellHeader,
  AppShellContent,
  AppShellNavbar,
  AppShellMain,
  AppShellNavbarToggler,
  AppShellLogo,
} from './AppShell.styled';
import { Settings } from 'tabler-icons-react';
import { ActionIcon } from '@/components/UI/.';

import { Header } from '@/components/Header/Header';
import { Menu } from '@/components/Menu/Menu';

export const AppShell = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <AppShellRoot>
      <AppShellHeader>
        <AppShellLogo>
          <h1>CodeImage</h1>
        </AppShellLogo>
        <AppShellNavbarToggler>
          <ActionIcon
            ariaLabel={`${isNavbarOpen ? 'hide' : 'show'} menu`}
            onClick={() => setIsNavbarOpen((isNavbarOpen) => !isNavbarOpen)}
          >
            <Settings size={18} />
          </ActionIcon>
        </AppShellNavbarToggler>
        <Header />
      </AppShellHeader>
      <AppShellContent>
        <AppShellNavbar isOpen={isNavbarOpen}>
          <Menu />
        </AppShellNavbar>
        <AppShellMain />
      </AppShellContent>
    </AppShellRoot>
  );
};
