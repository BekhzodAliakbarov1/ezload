import React from 'react';
import { AuthProvider } from './auth/auth.state';
import { ThemeProvider } from './theme/theme.state';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </AuthProvider>
);

export default AppProvider;
