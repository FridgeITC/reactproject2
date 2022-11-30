import React from 'react';
import { Outlet } from 'react-router-dom';

import '../Assets/Styles/base.css';

export default function LoginLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
