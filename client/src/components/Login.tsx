import { Box, Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { SpotifyButton } from '../style';

export const Login = () => {  
  const [accessToken] = useLocalStorage('access_token');

  const authUrl = `https://accounts.spotify.com/authorize\
?client_id=d356f935b2054dd99f85b27fbde83ad0\
&response_type=code\
&redirect_uri=http://localhost:3000/auth\
&scope=user-library-read`;

  return (<>
    {accessToken
    ?
      <Navigate to='/' replace />
    :
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        gap: '0.5rem'
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
    }
  </>);
}
