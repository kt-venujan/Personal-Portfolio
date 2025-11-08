import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the shape of our Context's data
type Theme = 'dark' | 'light';

type ThemeProviderState = {
  theme: Theme;
  toggleTheme: () => void;
};

// Create the Context with a default value
const ThemeContext = createContext<ThemeProviderState | undefined>(undefined);

// Define the props for our provider component
type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string; // For localStorage
};

/**
 * This component provides the theme (light/dark) to all components inside it.
 * It also handles applying the 'dark' class to the <html> tag.
 */
// Removed 'export' from here to make it a default export later
const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'dark',
  storageKey = 'vite-ui-theme',
  ...props
}) => {
  const [theme, setTheme] = useState<Theme>(
    // On load, check localStorage for a saved theme
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  // This 'useEffect' is the magic!
  // It runs whenever the 'theme' state changes.
  useEffect(() => {
    const root = window.document.documentElement; // This is the <html> tag

    // 1. Remove the old class
    root.classList.remove('light', 'dark');

    // 2. Add the new class
    root.classList.add(theme);

    // 3. Save the new theme in localStorage
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  // The function to switch the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * This is a "custom hook"
 * It's a simple shortcut so other components can easily get the theme
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

// Added a default export for the ThemeProvider component
export default ThemeProvider;