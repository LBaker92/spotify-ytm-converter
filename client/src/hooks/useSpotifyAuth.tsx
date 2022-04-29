import axios from 'axios';
import { useEffect, useState } from 'react'

export default function useSpotifyAuth(code: string) {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [expiresIn, setExpiresIn] = useState(0);

  function getSpotifyToken(): void {
    axios.post('http://localhost:5000/api/authorize', {
      code
    })
    .then(response => {
      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
      setExpiresIn(response.data.expiresIn);

      window.history.pushState({}, '', '/');
    })
    .catch(err => {
      // TO-DO: Handle error.
    });
  }

  function checkRefreshToken(): undefined | (() => void) {
    if (!refreshToken || !expiresIn) return;

    const interval = setInterval(() => getRefreshToken(), (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }

  function getRefreshToken() {
    axios.post('http://localhost:5000/api/refresh', {
      refreshToken
    })
    .then(response => {
      setAccessToken(response.data.accessToken);
      setExpiresIn(response.data.expiresIn);
    })
    .catch(err => {
      // TO-DO: Handle error.
    })
  }

  useEffect(() => getSpotifyToken(), [code]);
  useEffect(() => checkRefreshToken(), [refreshToken, expiresIn]);

  return accessToken;
}
