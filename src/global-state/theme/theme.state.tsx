import React, { useCallback } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { getCurrentThemeObject } from '../../configs/theme.config';
import { CurrentTheme } from '../../types/theme.types';
import { getStorage, setStorage } from '../../utils/local-storage';

interface ThemeContextInterface {
  theme: CurrentTheme;
  toggleTheme: () => void;
}
const ThemeCtx = React.createContext<ThemeContextInterface>({
  theme: 'light',
  toggleTheme: () => null,
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<CurrentTheme>(() => {
    const storedTheme = getStorage('theme');
    if (storedTheme === 'dark') {
      return 'dark';
    }
    return 'light';
  });
  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
    setStorage('theme', theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  return (
    <ThemeCtx.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <StyledThemeProvider theme={getCurrentThemeObject(theme)}>
        {children}
      </StyledThemeProvider>
    </ThemeCtx.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeCtx);
