import { Box, Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { SpotifyButton } from '../style';

export const Login = () => {
  const isSpotifyAuthenticated = localStorage.getItem('isSpotifyAuthenticated') === 'true';

  const authUrl = `https://accounts.spotify.com/authorize\
?client_id=aea5dab0bc0545199c6b2da2804bcb3d\
&response_type=code\
&redirect_uri=http://localhost:3000/auth\
&scope=user-library-read`;

  return (isSpotifyAuthenticated
    ? <Navigate to='/' />
    : <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem',
      minHeight: '100%'
    }}>
      <Typography variant='h2'
        align='center'
        component='h2'>
        YouTify
      </Typography>
      <Typography variant='subtitle1'
        align='center'
        component='p'
        paragraph>
        An open source solution for converting Spotify playlists to YouTube Music.
      </Typography>

      <SpotifyButton href={authUrl}
        size='large'>
        Login with Spotify
      </SpotifyButton>
    </Box>
  );
}
