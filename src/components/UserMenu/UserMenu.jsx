import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/sliceUser';

export const UserMenu = () => {
  const dispatch = useDispatch();
    const email = useSelector(state => state.auth.current.email);
  return (
    <div>
      <p>{email}</p>
      <button onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </div>
  );
};