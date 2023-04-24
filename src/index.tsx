import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from '@components/App';
import GlobalStyles from '@components/GlobalStyles';
import Loader from '@components/Loader';
import theme from '@constants/theme';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Store } from '@store';
import { persistor } from '@store/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={Store}>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <PersistGate persistor={persistor} loading={<Loader />}>
        <GoogleOAuthProvider clientId="573990938888-37r8rfbfecr9dne6q7m3ht0li3pf17ed.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </PersistGate>
    </ThemeProvider>
  </Provider>,
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (window.Cypress) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.store = Store;
}
