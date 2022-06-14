import Button from 'components/button/button';
import React from 'react';
import { LoadButtonsWrapper } from './load-buttons.styles';

const LoadButtons = () => {
  return (
    <LoadButtonsWrapper>
      <Button fullWidth>Post load</Button>
      <Button buttonType="secondary_dark" fullWidth>
        Cancel
      </Button>
    </LoadButtonsWrapper>
  );
};

export default LoadButtons;
