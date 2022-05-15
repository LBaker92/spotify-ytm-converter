import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { httpClient } from "../common/axiosConfig"
import { useSpotifyAuth } from "./useSpotifyAuth";

export const useHttpClient = () => {
  const { refreshAccessToken } = useSpotifyAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const responseInterceptor = httpClient.interceptors.response.use(
      response => response,
      async (error) => {
        const prevRequest = error.config;

        if (error.response.status === 401 && !prevRequest.sent) {
          prevRequest.sent = true;

          await refreshAccessToken();

          return httpClient(prevRequest);
        }

        localStorage.setItem('isSpotifyAuthenticated', 'false');
        navigate('/login');

        return Promise.reject(error);
      }
    );

    return () => httpClient.interceptors.response.eject(responseInterceptor);
  }, [refreshAccessToken, navigate])

  return httpClient;
}
