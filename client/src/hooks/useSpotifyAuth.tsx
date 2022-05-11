import { httpClient } from '../common/axiosConfig'
import { useSpotifyAuthContext } from '../context/SpotifyAuthContext';

export const useSpotifyAuth = () => {
  const { setToken } = useSpotifyAuthContext();

  const authorize = async (code: string): Promise<void> => {
    const response = await httpClient.post('/authorize', { code });
    setToken(response.data.accessToken);
  }

  const refreshAccessToken = async (): Promise<void> => {
    const response = await httpClient.post('/refresh');
    setToken(response.data.accessToken);
  }

  return {
    authorize,
    refreshAccessToken
  }
}
