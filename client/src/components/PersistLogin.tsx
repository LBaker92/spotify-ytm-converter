import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"
import { useSpotifyAuthContext } from "../context/SpotifyAuthContext"
import { useSpotifyAuth } from "../hooks/useSpotifyAuth";

export const PersistLogin = () => {
  const spotifyContext = useSpotifyAuthContext();
  const { refreshAccessToken } = useSpotifyAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!spotifyContext.token) {
      refreshAccess()
    }
  });

  const refreshAccess = async () => {
    try {
      await refreshAccessToken();
    } catch (error) {
      console.log(error);
      navigate('/login');
    }
  }

  return <Outlet />;
}