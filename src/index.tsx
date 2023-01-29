import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import App from './App';
import { Store } from './Store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
