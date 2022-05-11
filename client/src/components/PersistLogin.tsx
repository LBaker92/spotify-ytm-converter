import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"
import { useSpotifyAuthContext } from "../context/SpotifyAuthContext"
import { useSpotifyAuth } from "../hooks/useSpotifyAuth";

export const PersistLogin = () => {
  const spotifyContext = useSpotifyAuthContext();
  const { refreshAccessToken } = useSpotifyAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const refreshAccess = async () => {
      try {
        await refreshAccessToken();
      } catch (error) {
        console.log(error);
        navigate('/login');
      }
    }

    if (!spotifyContext.token) refreshAccess();
  }, [spotifyContext.token, refreshAccessToken, navigate]);

  return <Outlet />;
}