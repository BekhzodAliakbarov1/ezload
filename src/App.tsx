import React from 'react';
import LogoLoader from 'components/loaders/logo-loader/logo-loader';
import { GlobalStyle } from 'styles/global';
import GlobalWrapper from 'wrappers/global-wrapper/global-wrapper';
import AppProvider from 'global-state/store';
import Views from './views';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { SnackbarProvider } from 'notistack';

const App = () => (
  <SnackbarProvider maxSnack={3}>
    <AppProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <GlobalStyle />
        <GlobalWrapper>
          <React.Suspense fallback={<LogoLoader />}>
            <Views />
          </React.Suspense>
        </GlobalWrapper>
      </LocalizationProvider>
    </AppProvider>
  </SnackbarProvider>
);

export default App;
