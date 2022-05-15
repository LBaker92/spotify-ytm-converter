import { httpClient } from "../common/axiosConfig";

export const useSpotifyAuth = () => {
  const authorize = async (code: string): Promise<void> => {
    await httpClient.post('/authorize', { code });
  }

  const refreshAccessToken = async (): Promise<void> => {
    await httpClient.post('/refresh');
  }

  return {
    authorize,
    refreshAccessToken
  }
}
