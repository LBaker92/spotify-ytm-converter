import { Container } from '@mui/material';
import { Dashboard } from '../Dashboard';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../Login';
import { Authorize } from '../Authorize';
import { NotFound } from '../NotFound';
import { ProtectedRoute } from '../ProtectedRoute';

export const App = () => {
  return (
    <Container maxWidth='lg'
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<Navigate to='/dashboard' />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/auth' element={<Authorize />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </Container>
  );
}
