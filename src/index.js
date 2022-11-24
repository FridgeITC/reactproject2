import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Routes/index.js';

function App() {
  return <Router />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
