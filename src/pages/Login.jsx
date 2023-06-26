import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/sliceUser';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk({ email, password })).unwrap().then(()=>navigate("/contacts")).catch((error)=>error.message)
  };

  const onChange = ({ target: { value, name } }) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  return (
    <>
      <form autoComplete="on" onSubmit={onSubmit}>
        <div>
          <label htmlFor="examplInputEmail">Email address</label>
          <input
            type="email"
            name="email"
            id="examplInputEmail"
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="examplInputPassword">Password</label>
          <input
            type="password"
            name="password"
            id="examplInputPassword"
            onChange={onChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default Login;
