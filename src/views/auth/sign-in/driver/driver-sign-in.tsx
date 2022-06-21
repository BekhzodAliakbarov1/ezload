import React from 'react';
import { Step, StepsProvider } from 'global-state/step/step-context';
import FirstStep from './sign-in-steps/first-step/first-step';
import SecondStep from './sign-in-steps/second-step/second-step';
import ThirdStep from './sign-in-steps/third-step/third-step';

const DriverSignIn = () => {
  return (
    <StepsProvider>
      <Step step={1}>
        <FirstStep />
      </Step>
      <Step step={2}>
        <SecondStep />
      </Step>
      <Step step={3}>
        <ThirdStep />
      </Step>
    </StepsProvider>
  );
};

export default DriverSignIn;
