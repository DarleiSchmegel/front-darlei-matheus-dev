import React, { useContext, createContext, useState, ReactNode } from 'react';
type Props = {
  children: ReactNode;
};
interface NavigationContextData {
  whichNavItemIsOpen: string;
  handleWhichNavItemIsOpen(path: string): void;
}
const NavigationContext = createContext({} as NavigationContextData);

export function NavigationProvider({ children }: Props) {
  const [whichNavItemIsOpen, setWhichNavItemIsOpen] = useState('');

  const handleWhichNavItemIsOpen = (path: string) => {
    setWhichNavItemIsOpen(path);
  };

  return (
    <NavigationContext.Provider value={{ whichNavItemIsOpen, handleWhichNavItemIsOpen }}>
      {children}
    </NavigationContext.Provider>
  );
}
export function useNavigation(): NavigationContextData {
  const context = useContext(NavigationContext);

  return context;
}
