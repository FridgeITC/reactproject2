import React, { useState } from 'react';
import axios from '../Config/axios';

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/login', {
        username: email,
        password: pass
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem('jwt', '1234');
        console.log(localStorage.getItem('jwt'));
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
