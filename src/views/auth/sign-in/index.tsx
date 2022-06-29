import React, { useState } from 'react';
import { Step, StepsProvider } from 'global-state/step/step-context';
import FirstStep from './sign-in-steps/first-step/first-step';
import SecondStep from './sign-in-steps/second-step/second-step';
import ThirdStep from './sign-in-steps/third-step/third-step';
import ThirdStepDriver from './sign-in-steps/third-step-driver';
import FourthStep from './sign-in-steps/fourth-step';
import { useAuth } from 'global-state/auth/auth.state';

const SignIn: React.FC<{ userType: 'customer' | 'driver' }> = ({
  userType,
}) => {
  const [data, setData] = useState<{
    phone_number: string;
    token: string;
    user_id: string;
  }>({
    phone_number: '',
    token: '',
    user_id: '',
  });
  const { login } = useAuth();

  const handlePhoneNumber = (phone_number: string) => {
    setData({ ...data, phone_number });
  };
  const handleTokenAnUserId = (accessToken: string, user_id: string) => {
    setData({ ...data, token: accessToken, user_id });
  };

  const handleLogin = () => {
    login({
      tokens: { access: data.token, refresh: '' },
      userId: data.user_id,
      userType,
    });
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
          saveTokenAndId={handleTokenAnUserId}
        />
      </Step>
      <Step step={3}>
        {userType === 'customer' ? (
          <ThirdStep
            handleLogin={handleLogin}
            token={data.token}
            user_id={data.user_id}
          />
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
