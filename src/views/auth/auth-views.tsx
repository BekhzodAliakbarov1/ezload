import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AUTH_PREFIX_PATH } from '../../configs/route.config';

const Example = () => <h1>hello</h1>;

export const AuthViews = () => (
  <Routes>
    <Route path={`${AUTH_PREFIX_PATH}/`} element={<Example />} />
  </Routes>
);

export default AuthViews;
