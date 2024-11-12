import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // For Router to work you need to surround <App/> with <BrowserRotuer>
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

