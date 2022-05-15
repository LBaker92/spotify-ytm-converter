import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSpotifyAuth } from "../hooks/useSpotifyAuth";

export const Authorize = () => {
  const { authorize } = useSpotifyAuth();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get('code') || '';

  useEffect(() => {
    const authorizeWithSpotify = async () => {
      await authorize(code);

      localStorage.setItem('isSpotifyAuthenticated', 'true');

      navigate('/', { replace: true });
    }

    authorizeWithSpotify();
  }, [code, authorize, navigate]);

  return <></>;
};
