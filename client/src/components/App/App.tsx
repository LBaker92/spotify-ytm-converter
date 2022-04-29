import './App.css';
import Login from '../Login/Login';
import { Container } from '@mui/material';
import Dashboard from '../Dashboard/Dashboard';

export default function App() {
  const code = new URLSearchParams(window.location.search).get('code');

  return (
    <Container maxWidth='lg'
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      {code ? <Dashboard code={code} /> : <Login />}
    </Container>
  );
}
