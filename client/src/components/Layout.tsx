import { AppBar, Box, Button, Container, Toolbar } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';

export const Layout = () => {
  const navigate = useNavigate();
  const isSpotifyAuthenticated = localStorage.getItem('isSpotifyAuthenticated') === 'true';

  const logout = () => {
    localStorage.removeItem('isSpotifyAuthenticated');
    navigate('/login');
  }

  return (<>
    <AppBar position='static'
      enableColorOnDark>
      <Toolbar>
        <h2>YouTify</h2>
        <p style={{ marginLeft: '2rem' }}>A playlist converter for Spotify to YouTube Music</p>
        <Box sx={{ ml: 'auto' }}>
          <Button color='inherit'>
            <BrightnessMediumIcon />
          </Button>
          {isSpotifyAuthenticated
            ? <Button color='inherit' onClick={() => logout()}>Logout</Button>
            : <></>
          }
        </Box>
      </Toolbar>
    </AppBar>
    <Container maxWidth='lg'
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
      <Outlet />
    </Container>
  </>)
}
