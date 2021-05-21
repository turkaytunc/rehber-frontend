import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import PersonContextProvider from './contexts/personContext';
import CurrentPersonProvider from './contexts/currentPerson';

ReactDOM.render(
  <React.StrictMode>
    <PersonContextProvider>
      <CurrentPersonProvider>
        <App />
      </CurrentPersonProvider>
    </PersonContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
