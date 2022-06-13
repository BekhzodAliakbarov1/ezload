import { Route, Routes } from 'react-router-dom';
import CreateLoad from './create-load/create-load';
import Feed from './feed/feed';

const AppViews = () => (
  <Routes>
    <Route path="/" element={<Feed />} />
    <Route path="/create-load" element={<CreateLoad />} />
  </Routes>
);
export default AppViews;
