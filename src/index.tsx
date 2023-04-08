import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './components/App';
import GlobalStyles from './components/GlobalStyles';
import { Store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={Store}>
      <GoogleOAuthProvider clientId="573990938888-37r8rfbfecr9dne6q7m3ht0li3pf17ed.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>,
);
