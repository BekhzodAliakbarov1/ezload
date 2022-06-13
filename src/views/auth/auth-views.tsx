import SignInLayout from 'layouts/sign-in-layout';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './landing-page';

export const AuthViews = () => (
  <>
    <Routes>
      <Route path="/creator/login" element={<SignInLayout type="customer" />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </>
);

export default AuthViews;
