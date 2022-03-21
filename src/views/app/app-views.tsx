import React, { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { APP_PREFIX_PATH } from 'configs/route.config';

const Example0 = () => <h1>hello0</h1>;
const Example1 = () => <h1>hello1</h1>;
const Example2 = () => <h1>hello2</h1>;

const AppViews = () => (
  <Routes>
    <Route path="/" element={<Example0 />} />
    <Route path=":id" element={<Example1 />} />
    <Route path="me" element={<Example2 />} />
  </Routes>
);
export default AppViews;
