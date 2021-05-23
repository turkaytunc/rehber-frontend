import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import PersonContextProvider from './contexts/personContext';

ReactDOM.render(
  <React.StrictMode>
    <PersonContextProvider>
      <App />
    </PersonContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
