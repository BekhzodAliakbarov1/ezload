import React from 'react';
import ActionLoad from 'views/app/load-action/load-action';
import { LoadContextProvider } from './load-action-layout.context';

const ActionLoadLayout = () => {
  return (
    <LoadContextProvider>
      <ActionLoad />
    </LoadContextProvider>
  );
};

export default ActionLoadLayout;
