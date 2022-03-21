import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AppLayout from 'layouts/app-layout';
import AuthLayout from 'layouts/auth-layout';
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from '../configs/route.config';
import { useAuth } from 'global-state/auth/auth.state';

const UnAuthenticatedRouter = () => (
  <>
    <Route path={`${AUTH_PREFIX_PATH}/*`} element={<AuthLayout />} />
    <Route path="*" element={<Navigate to="/auth" replace />} />
  </>
);

const AuthenticatedRouter = () => <Route path="/*" element={<AppLayout />} />;

const Views = () => {
  const { tokens } = useAuth();
  return (
    <Routes>
      {!tokens.access ? AuthenticatedRouter() : UnAuthenticatedRouter()}
    </Routes>
  );
};

export default Views;
