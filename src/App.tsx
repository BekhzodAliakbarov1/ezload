import React from 'react';
import LogoLoader from 'components/loaders/logo-loader/logo-loader';
import { GlobalStyle } from 'styles/global';
import GlobalWrapper from 'wrappers/global-wrapper/global-wrapper';
import AppProvider from 'global-state/store';
import Views from './views';

const App = () => (
  <AppProvider>
    <GlobalStyle />
    <GlobalWrapper>
      <React.Suspense fallback={<LogoLoader />}>
        <Views />
      </React.Suspense>
    </GlobalWrapper>
  </AppProvider>
);

export default App;
