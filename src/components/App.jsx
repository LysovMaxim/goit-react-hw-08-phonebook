import { Navigate, Route, Routes } from 'react-router-dom';
import Contacts from '../pages/Contacts';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Header from './Header/Header';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import PublicRouter from './PublicRouter/PublicRouter';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/register"
          element={
            <PublicRouter>
              <Register />
            </PublicRouter>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRouter>
              <Login />
            </PublicRouter>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRouter>
              <Contacts />
            </PrivateRouter>
          }
        />
        <Route path="*" element={<Navigate to={'/login'} />} />
      </Routes>
    </>
  );
};
