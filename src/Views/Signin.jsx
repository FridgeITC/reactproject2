import React, { useState } from 'react';
import { Login } from '../Components/Login';

import '../Assets/Styles/signin.css';

const SignIn = () => {
  return <div className='signin'>{<Login />}</div>;
};

export default SignIn;
