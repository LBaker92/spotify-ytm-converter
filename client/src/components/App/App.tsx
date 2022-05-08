import { Home } from '../Home';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../Login';
import { Authorize } from '../Authorize';
import { NotFound } from '../NotFound';
import { Layout } from '../Layout';
import { PersistLogin } from '../PersistLogin';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route element={<PersistLogin />}>
          <Route index element={<Home />} />
        </Route>

        <Route path='login' element={<Login />} />
        <Route path='auth' element={<Authorize />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}
