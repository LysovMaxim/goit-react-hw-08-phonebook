import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/sliceUser';
import css from "./Login.module.css"
import { toast } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(() => toast.success("Welcome"), navigate('/contacts')
      )
      .catch(error => toast.error(`Wrong password or email`));
  };

  const onChange = ({ target: { value, name } }) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  return (
    <>
      <form autoComplete="on" onSubmit={onSubmit} className={css.LoginForm}>
        <label className={css.LoginLabel}>
          Email address
          <input
            type="email"
            name="email"
            id="examplInputEmail"
            onChange={onChange}
            required
            className={css.LoginInput}
          />
        </label>

        <label className={css.LoginLabel}>
          Password
          <input
            type="password"
            name="password"
            id="examplInputPassword"
            onChange={onChange}
            required
            className={css.LoginInput}
          />
        </label>

        <button type="submit" className={css.LoginBtn}>Login</button>
      </form>
    </>
  );
};
export default Login;
