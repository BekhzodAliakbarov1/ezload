import React, { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
const AppLayout = lazy(() => import('layouts/app-layout'));
const AuthLayout = lazy(() => import('layouts/auth-layout'));
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from '../configs/route.config';
import { useAuth } from 'global-state/auth/auth.state';
import TermAndPolicy from './shared/term-privacy';

const UnAuthenticatedRouter = () => (
  <>
    <Route path={`${AUTH_PREFIX_PATH}/*`} element={<AuthLayout />} />
    <Route path="*" element={<Navigate to="/auth" replace />} />
  </>
);

const AuthenticatedRouter = () => (
  <>
    <Route path={`${APP_PREFIX_PATH}*`} element={<AppLayout />} />
  </>
);

const Views = () => {
  const { tokens } = useAuth();

  return (
    <Routes>
      {tokens.access ? AuthenticatedRouter() : UnAuthenticatedRouter()}
      <Route path="/info/*" element={<TermAndPolicy />} />
    </Routes>
  );
};

export default Views;
