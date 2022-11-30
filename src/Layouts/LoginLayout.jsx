import React from 'react';
import { Outlet } from 'react-router-dom';

import '../Assets/Styles/base.css';

export default function LoginLayout() {
  return (
    <div style={{ width: '100vw', heoght: '100vw' }}>
      <Outlet />
    </div>
  );
}
