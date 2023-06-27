import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useEffect } from 'react';
import { getCurrentThunk, logoutThunk } from 'redux/sliceUser';
import { setToken } from 'apiUser';
import  css  from "./Header.module.css"

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
    <header className={css.Header}>
      <nav>
        <ul className={css.HeaderList}>
          {!token &&<li>
             <NavLink to="register" className={css.HeaderLink}>Register</NavLink>
          </li>}
          {!token && <li>
            <NavLink to="/login" className={css.HeaderLink}>Login</NavLink>
          </li>}
          {token && <li>
            <NavLink to="/contacts" className={css.HeaderLink}>Contacts</NavLink>
          </li>}
        </ul>
        {current && <UserMenu />}
      </nav>
      
    </header>
  );
};
export default Header;
