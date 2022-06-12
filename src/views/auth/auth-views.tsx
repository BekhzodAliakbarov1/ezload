import SignInLayout from 'layouts/sign-in-layout';
import { Routes, Route } from 'react-router-dom';

export const AuthViews = () => (
  <>
    <Routes>
      <Route path="/creator/login" element={<SignInLayout type="customer" />} />
    </Routes>
  </>
);

export default AuthViews;
