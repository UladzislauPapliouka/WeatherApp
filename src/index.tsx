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
    <PersistGate persistor={persistor} loading={<Loader />}>
      <GoogleOAuthProvider clientId="573990938888-37r8rfbfecr9dne6q7m3ht0li3pf17ed.apps.googleusercontent.com">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </GoogleOAuthProvider>
    </PersistGate>
  </Provider>,
);
