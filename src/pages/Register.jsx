import { register } from 'apiUser';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from "./Register.module.css"

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    register({
      name,
      email,
      password,
    }).then(() => navigate('/login'));
  };

  const onChange = ({ target: { value, name } }) => {
    name === 'email'
      ? setEmail(value)
      : name === 'password'
      ? setPassword(value)
      : setName(value);
  };

  return (
    <>
      <form autoComplete="on" onSubmit={onSubmit} className={css.RegisterForm}>
        <label className={css.RegisterLabel}>
          Name
          <input
            type="text"
            name="name"
            id="examplInputName"
            onChange={onChange}
            required
            className={css.RegisterInput}
          />
        </label>
        <label className={css.RegisterLabel}>
          Email address
          <input
            type="email"
            name="email"
            id="examplInputEmail"
            onChange={onChange}
            required
            className={css.RegisterInput}
          />
        </label>
        <label className={css.RegisterLabel}>
          Password
          <input
            type="password"
            name="password"
            id="examplInputPassword"
            onChange={onChange}
            required
            className={css.RegisterInput}
          />
        </label>

        <button type="submit" className={css.RegisterBtn}>Register</button>
      </form>
    </>
  );
};
export default Register;
