import { Home } from '../Home';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../Login';
import { Authorize } from '../Authorize';
import { NotFound } from '../NotFound';
import { Layout } from '../Layout';
import { RequireSpotifyAuth } from '../RequireSpotifyAuth';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useDarkmodeProvider } from '../../context/DarkmodeContext';

export const App = () => {
  const { theme } = useDarkmodeProvider();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<RequireSpotifyAuth />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='auth' element={<Authorize />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
