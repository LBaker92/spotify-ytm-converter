import { httpClient } from "../common/axiosConfig";

export const useSpotifyAuth = () => {
  const authorize = async (code: string): Promise<void> => {
    await httpClient.post('/authorize/login', { code });
  }

  const deauthorize = async (): Promise<void> => {
    await httpClient.get('/authorize/logout');
  }

  const refreshAccessToken = async (): Promise<void> => {
    await httpClient.post('/refresh');
  }

  return {
    authorize,
    deauthorize,
    refreshAccessToken
  }
}
