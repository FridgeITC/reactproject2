import React, { useState } from 'react';
import axios from '../Config/axios';
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/login', {
        username: email,
        password: pass
      })
      .then((res) => {
        localStorage.setItem('jwt-token', res.data['jwt-token']);
        handleRedirect();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='auth-form-container'>
      <h2 className='form-title'>Iniciar Sesión</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='email'>Correo</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='Ingresa correo'
          id='email'
          name='email'
        />
        <label htmlFor='password'>Contraseña</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type='password'
          placeholder='Ingresa contraseña'
          id='password'
          name='password'
        />
        <button type='submit'>Iniciar Sesión</button>
      </form>
    </div>
  );
};
