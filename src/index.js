import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Admin from './pages/Admin';
import { Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <a href='/admin'><Admin /></a>
      <App />
      {/* <Admin /> */}
    </Router>
  </React.StrictMode>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
);