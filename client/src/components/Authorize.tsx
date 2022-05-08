import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSpotifyAuth } from "../hooks/useSpotifyAuth";

export const Authorize = () => {
  const { authorize } = useSpotifyAuth();
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get('code') || '';

  useEffect(() => {
    authorizeWithSpotify();
  });

  const authorizeWithSpotify = async () => {
    await authorize(code);
    setIsLoading(false);
  }

  return isLoading ? <></> : <Navigate to='/' />
};
