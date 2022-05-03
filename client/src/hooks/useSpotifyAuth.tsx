import axios from "axios";
import { useLocalStorage } from "./useLocalStorage";

export const useSpotifyAuth = () => {
  const [accessToken, setAccessToken] = useLocalStorage('access_token');
  

  const createAccessToken = (code: string): void => {
    if (accessToken) return; // Don't try to get a token if we have one already.

    axios.interceptors.response.use()
    axios.post('http://localhost:5000/api/authorize', {
      code
    }, {
      withCredentials: true,
    })
    .then(response => {
      setAccessToken(response.data.accessToken);
    })
    .catch(error => {
      // TO-DO: Handle error.
    });
  }

  const refreshAccessToken = (): void => {
    axios.post('http://localhost:5000/api/refresh', {}, { withCredentials: true })
    .then(response => {
      setAccessToken(response.data.accessToken);
    })
    .catch(error => {
      // TO-DO: Handle error.
    });
  }

  return {
    accessToken,
    createAccessToken,
    refreshAccessToken
  };
}
