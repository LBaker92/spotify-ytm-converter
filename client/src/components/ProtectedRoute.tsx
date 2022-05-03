import { Navigate, Outlet } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const ProtectedRoute = () => {
  const [accessToken] = useLocalStorage('access_token');

  return !accessToken ? <Navigate to='/login' /> : <Outlet />;
}
