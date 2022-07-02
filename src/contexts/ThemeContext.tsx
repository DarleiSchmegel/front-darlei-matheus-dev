import React, { useContext, createContext, useState, useEffect, ReactNode } from 'react';
type Props = {
  children: ReactNode;
};
interface ThemeContextData {
  theme: 'dark' | 'light';
  ToggleTheme(): void;
  whichNavItemIsOpen: string;
  handleWhichNavItemIsOpen(path: string): void;
}
const ThemeContext = createContext({} as ThemeContextData);

export function ThemesProvider({ children }: Props) {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [whichNavItemIsOpen, setWhichNavItemIsOpen] = useState('');

  useEffect(() => {
    const themeLocal = localStorage.getItem('theme');

    setTheme(themeLocal === 'light' ? 'light' : 'dark');
  }, []);

  const ToggleTheme = () => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };
  const handleWhichNavItemIsOpen = (path: string) => {
    setWhichNavItemIsOpen(path);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, ToggleTheme, whichNavItemIsOpen, handleWhichNavItemIsOpen }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  return context;
}
