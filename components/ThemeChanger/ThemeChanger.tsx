import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'tabler-icons-react';
import { ActionIcon, Tooltip } from '@/components/UI/.';

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const label = `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`;
  const icon = theme === 'light' ? <Moon size={18} /> : <Sun size={18} />;

  const handleActionIconClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Tooltip content={label} align="start">
      <ActionIcon onClick={handleActionIconClick} ariaLabel={label}>
        {icon}
      </ActionIcon>
    </Tooltip>
  );
};
