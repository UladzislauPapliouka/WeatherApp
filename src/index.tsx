import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import App from '@components/App';
import ErrorBoundary from '@components/ErrorBoundaries';
import GlobalStyles from '@components/GlobalStyles';
import Loader from '@components/Loader';
import theme from '@constants/theme';
import { Store } from '@store';
import { persistor } from '@store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={Store}>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <PersistGate persistor={persistor} loading={<Loader />}>
          <GoogleOAuthProvider
            clientId={`${process.env.REACT_GOOGLE_CLIENT_ID}.apps.googleusercontent.com`}
          >
            <App />
          </GoogleOAuthProvider>
        </PersistGate>
      </ErrorBoundary>
    </ThemeProvider>
  </Provider>,
);

// @ts-ignore
if (window.Cypress) {
  // @ts-ignore
  window.store = Store;
}
