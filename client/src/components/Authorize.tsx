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
      try {
        await authorize(code);
        navigate('/', { replace: true });
      } catch (error) {
        console.log(error);
        navigate('/login');
      }
    }

    authorizeWithSpotify();
  }, [code, authorize, navigate]);

  return <></>;
};
