import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from '@components/App';
import GlobalStyles from '@components/GlobalStyles';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { persistor } from '@store/Store';
import { PersistGate } from 'redux-persist/integration/react';

import { Store } from '@/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={Store}>
      <PersistGate persistor={persistor} loading={null}>
        <GoogleOAuthProvider clientId="573990938888-37r8rfbfecr9dne6q7m3ht0li3pf17ed.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
