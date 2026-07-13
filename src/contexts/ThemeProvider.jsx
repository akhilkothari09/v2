import { createContext, useContext, useEffect, useMemo } from 'react';

const ThemeContext = createContext({
  theme: 'light',
});

export function ThemeProvider({ theme = 'light', children }) {
  const value = useMemo(() => ({ theme }), [theme]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    return () => {
      delete document.documentElement.dataset.theme;
      document.documentElement.style.removeProperty('color-scheme');
    };
  }, [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
