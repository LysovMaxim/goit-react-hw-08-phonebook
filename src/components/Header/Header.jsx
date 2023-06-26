import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useEffect } from 'react';
import { getCurrentThunk, logoutThunk } from 'redux/sliceUser';
import { setToken } from 'apiUser';

const Header = () => {
  const { current, token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && !current) {
      setToken(token);
      dispatch(getCurrentThunk()).unwrap().catch(()=>dispatch(logoutThunk()))
    }
  }, [token, dispatch, current]);

  return (
    <header>
      <nav>
        <ul>
          {!token &&<li>
             <NavLink to="register">Register</NavLink>
          </li>}
          {!token && <li>
            <NavLink to="/login">Login</NavLink>
          </li>}
          {token && <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>}
        </ul>
      </nav>
      {current && <UserMenu />}
    </header>
  );
};
export default Header;
