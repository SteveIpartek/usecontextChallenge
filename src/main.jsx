import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // asegúrate que sea .jsx si renombraste
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
