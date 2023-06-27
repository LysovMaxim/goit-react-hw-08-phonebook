import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/sliceUser';
import css from "./UserMenu.module.css"

export const UserMenu = () => {
  const dispatch = useDispatch();
    const email = useSelector(state => state.auth.current.email);
  return (
    <div>
      <p className={css.EmailText}>{email}</p>
      <button className={css.UserMenuBtn} onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </div>
  );
};