import { register } from 'apiUser';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate()

  const onSubmit = e => {
    e.preventDefault();
    register({
      name,
      email,
      password,
    }).then(()=> navigate("/login"))
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
      <form autoComplete="on" onSubmit={onSubmit}>
        <div>
          <label htmlFor="examplInputName">Name</label>
          <input
            type="text"
            name="name"
            id="examplInputName"
            onChange={onChange}
            required
          />
        </div>
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
        <button type="submit">Register</button>
      </form>
    </>
  );
};
export default Register;
