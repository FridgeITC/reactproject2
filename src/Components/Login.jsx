import React, { useState } from 'react';
import axios from '../Config/axios';
import { useNavigate } from 'react-router-dom';
import { Snackbar } from '@mui/material';
import createAlert from './createAlert';

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [status, setStatus] = useState({ toastOpened: false, status: 200 });
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
        const { status } = res;
        const toastOpened = true;
        setStatus({ toastOpened, status });
      })
      .catch((error) => {
        const { status } = error;
        const toastOpened = true;
        setStatus({ toastOpened, status });
      });
  };

  return (
    <>
      <Snackbar
        open={status.toastOpened}
        autoHideDuration={1500}
        onClose={status.status == 200 ? handleRedirect : console.log(401)}
      >
        {createAlert(status.status == 200)}
      </Snackbar>
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
    </>
  );
};
