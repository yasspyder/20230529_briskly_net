import React from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
