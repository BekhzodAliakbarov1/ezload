import React, { useState } from 'react';
import { Step, StepsProvider } from 'global-state/step/step-context';
import FirstStep from './sign-in-steps/first-step/first-step';
import SecondStep from './sign-in-steps/second-step/second-step';
import ThirdStep from './sign-in-steps/third-step/third-step';
import ThirdStepDriver from './sign-in-steps/third-step-driver';
import FourthStep from './sign-in-steps/fourth-step';

const SignIn: React.FC<{ userType: 'customer' | 'driver' }> = ({
  userType,
}) => {
  const [data, setData] = useState<{
    phone_number: string;
    token: string;
  }>({
    phone_number: '',
    token: '',
  });

  const handlePhoneNumber = (phone_number: string) => {
    setData({ ...data, phone_number });
  };
  const handleToken = (accessToken: string) => {
    setData({ ...data, token: accessToken });
  };

  return (
    <StepsProvider>
      <Step step={1}>
        <FirstStep setPhoneNumber={handlePhoneNumber} />
      </Step>
      <Step step={2}>
        <SecondStep
          phone_number={data.phone_number}
          userType={userType}
          saveToken={handleToken}
        />
      </Step>
      <Step step={3}>
        {userType === 'customer' ? (
          <ThirdStep token={data.token} />
        ) : (
          <ThirdStepDriver />
        )}
      </Step>
      <Step step={4}>
        <FourthStep />
      </Step>
    </StepsProvider>
  );
};

export default SignIn;
