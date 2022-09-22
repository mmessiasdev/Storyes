import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RoutesPage from './controller/routes';
import './view/componnents/universal.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesPage/>
  </React.StrictMode>
);