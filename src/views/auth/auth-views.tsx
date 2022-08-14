import { lazy } from 'react';
const SignInLayout = lazy(() => import('layouts/sign-in-layout'));
import { Routes, Route } from 'react-router-dom';
import LandingPage from './landing-page';

export const AuthViews = () => (
  <Routes>
    <Route path="/login" element={<SignInLayout />} />
    <Route path="/" element={<LandingPage />} />
  </Routes>
);

export default AuthViews;
