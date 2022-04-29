import { Box, Typography } from '@mui/material';
import { SpotifyButton } from './style';

export default function Login() {
  const authUrl = `https://accounts.spotify.com/authorize\
?client_id=aff39ac9de5440a4bed8b34bc45ce4f1\
&response_type=code\
&redirect_uri=http://localhost:3000\
&scope=user-library-read`;

  return (
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
  );
}
