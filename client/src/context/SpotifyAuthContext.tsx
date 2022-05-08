import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from 'react'

interface IProps {
  children: ReactNode;
}

interface Context {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

const SpotifyAuthContext = createContext<Context | undefined>(undefined);

export const useSpotifyAuthContext = () => {
  const context = useContext(SpotifyAuthContext);

  if (!context) {
    throw new Error('useSpotifyAuthContext must be used within a SpotifyAuthProvider');
  }

  return context;
}

export const SpotifyAuthProvider = ({ children }: IProps) => {
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