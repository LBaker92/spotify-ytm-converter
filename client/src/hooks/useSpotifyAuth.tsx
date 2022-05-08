import { useEffect, useState } from 'react';
import { httpClient } from '../common/axiosConfig'
import { useSpotifyAuthContext } from '../context/SpotifyAuthContext';

export const useSpotifyAuth = () => {
  const spotifyContext = useSpotifyAuthContext();
  const [expiresIn, setExpiresIn] = useState(0);

  const authorize = async (code: string): Promise<void> => {
    const response = await httpClient.post('/authorize', { code });
    spotifyContext.setToken(response.data.accessToken);
    setExpiresIn(response.data.expiresIn);
  }

  const refreshAccessToken = async (): Promise<void> => {
    const response = await httpClient.post('/refresh');
    spotifyContext.setToken(response.data.accessToken);
    setExpiresIn(response.data.expiresIn);
  }

  useEffect(() => {
    if (!expiresIn) return;

    const interval = setInterval(refreshAccessToken, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [expiresIn])

  return {
    authorize,
    refreshAccessToken
  }
}
