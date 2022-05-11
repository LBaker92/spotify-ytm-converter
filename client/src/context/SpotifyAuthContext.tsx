import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from 'react'

interface Props {
  children: ReactNode;
}

interface SpotifyContext {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

const SpotifyAuthContext = createContext<SpotifyContext | undefined>(undefined);

export const useSpotifyAuthContext = () => {
  const context = useContext(SpotifyAuthContext);

  if (!context) {
    throw new Error('useSpotifyAuthContext must be used within a SpotifyAuthProvider');
  }

  return context;
}

export const SpotifyAuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState('');

  const providerValue = useMemo(() => ({
    token,
    setToken
  }), [token]);

  return (
    <SpotifyAuthContext.Provider value={providerValue}>
      {children}
    </SpotifyAuthContext.Provider>
  )
}