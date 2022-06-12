import React from 'react';
import { Step, StepsProvider } from 'global-state/step/step-context';
import FirstStep from './sign-in-steps/first-step/first-step';
import SecondStep from './sign-in-steps/second-step/second-step';
import ThirdStep from './sign-in-steps/third-step/third-step';

const CustomerSignIn = () => {
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
      <Step step={4}>
        <h1>12</h1>
      </Step>
      <Step step={5}>
        <h1>12</h1>
      </Step>
      <Step step={6}>
        <h1>12</h1>
      </Step>
    </StepsProvider>
  );
};

export default CustomerSignIn;
