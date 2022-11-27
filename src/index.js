import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Routes/index.js';

import './Assets/Styles/base.css';

function App() {
  return <Router />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
