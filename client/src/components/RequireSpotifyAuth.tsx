import { Navigate, Outlet } from 'react-router-dom';

export const RequireSpotifyAuth = () => {
  const isSpotifyAuthenticated = localStorage.getItem('isSpotifyAuthenticated') === 'true';

  return isSpotifyAuthenticated
    ? <Outlet />
    : <Navigate to='/login' />
}
