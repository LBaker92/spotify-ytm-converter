import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container maxWidth='lg'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
      <Outlet />
    </Container>
  )
}
