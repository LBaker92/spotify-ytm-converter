import { AppBar, Box, Button, Container, Toolbar } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import { useDarkmodeProvider } from '../context/DarkmodeContext';
import { useSpotifyAuth } from '../hooks/useSpotifyAuth';

export const Layout = () => {
  const { toggleTheme } = useDarkmodeProvider();
  const { deauthorize } = useSpotifyAuth();
  const navigate = useNavigate();

  const isSpotifyAuthenticated = localStorage.getItem('isSpotifyAuthenticated') === 'true';
  const fixedAppBarHeight = '64px';

  const logout = async () => {
    try {
      await deauthorize();
    } finally {
      localStorage.removeItem('isSpotifyAuthenticated');
      navigate('/login');
    }
  }

  return (<>
    <AppBar position='static'
      elevation={1}
      sx={{
        height: fixedAppBarHeight,
      }}>
      <Toolbar>
        <h1>YouTify</h1>
        <p style={{ marginLeft: '2rem' }}>A playlist converter for Spotify to YouTube Music</p>
        <Box sx={{ ml: 'auto' }}>
          <Button color='inherit' onClick={() => toggleTheme()}>
            <BrightnessMediumIcon />
          </Button>
          {isSpotifyAuthenticated
            ? <Button color='inherit' onClick={() => logout()}>Logout</Button>
            : <></>
          }
        </Box>
      </Toolbar>
    </AppBar>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: `calc(100vh - ${fixedAppBarHeight})`,
        overflow: 'auto'
      }}>
      <Container maxWidth={'xl'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
        }}>
        <Outlet />
      </Container>
    </Box>
  </>)
}
