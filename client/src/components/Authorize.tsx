import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSpotifyAuth } from "../hooks/useSpotifyAuth";

export const Authorize = () => {
  const navigate = useNavigate();
  const {accessToken, createAccessToken} = useSpotifyAuth();

  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get('code') || '';


  useEffect(() => {
    if (!code) navigate('/login', { replace: true });

    createAccessToken(code);
  }, [code, navigate, createAccessToken]);

  useEffect(() => {
    if (accessToken) navigate('/', { replace: true });
  }, [accessToken, navigate]);

  return <></>;
}
