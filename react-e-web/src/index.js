import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './GlobelStyles';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App className = 'App' />
  </React.StrictMode>,
  document.getElementById('root')
);

