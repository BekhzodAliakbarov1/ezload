import React, { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { APP_PREFIX_PATH } from 'configs/route.config';

const Example = () => <h1>hello</h1>;

const AppViews = () => (
  <Routes>
    <Route path={`${APP_PREFIX_PATH}/`} element={<Example />} />
  </Routes>
);
export default AppViews;
