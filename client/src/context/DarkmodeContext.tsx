import { createTheme, PaletteMode, Theme, useMediaQuery } from '@mui/material';
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'

interface ThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}

interface ProviderProps {
  children: ReactNode;
}

const DarkmodeContext = createContext<ThemeContext | undefined>(undefined);

export const DarkmodeProvider = ({ children }: ProviderProps) => {
  const defaultMode = useMediaQuery('(prefers-color-scheme: light)') ? 'dark' : 'light';
  const savedMode = localStorage.getItem('themeMode') || defaultMode

  const [mode, setMode] = useState<PaletteMode>(savedMode as PaletteMode);

  const theme = useMemo(() => createTheme({
    palette: {
      mode: mode
    }
  }), [mode]);

  const providerValue = useMemo(() => ({
    theme,
    toggleTheme: () => {
      setMode(prevMode => prevMode === 'dark' ? 'light' : 'dark');
    }
  }), [mode])

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  return (
    <DarkmodeContext.Provider value={providerValue}>
      {children}
    </DarkmodeContext.Provider>
  );
}

export const useDarkmodeProvider = () => {
  const context = useContext(DarkmodeContext);

  if (context === undefined) throw new Error('useDarkmodeProvider must be used within a DarkmodeProvider');

  return context;
}
