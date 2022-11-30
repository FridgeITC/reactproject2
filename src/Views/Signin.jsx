import React, { useState } from 'react';
import { Login } from '../Components/Login';

import '../Assets/Styles/signin.css';

const Signin = () => {
  return <div className='signin'>{<Login />}</div>;
};

export default Signin;
