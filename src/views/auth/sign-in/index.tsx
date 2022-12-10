import React, { useState } from 'react';
import { Step, StepsProvider } from 'global-state/step/step-context';
import PhoneNumber from './sign-in-steps/phone-number/phone-number';
import Confirmation from './sign-in-steps/confirmation/confirmation';
import ThirdStep from './sign-in-steps/third-step/third-step';
import ThirdStepDriver from './sign-in-steps/third-step-driver';
import FourthStep from './sign-in-steps/fourth-step';
import { useAuth } from 'global-state/auth/auth.state';
import CheckUserType from './sign-in-steps/check-user-type';

const SignIn = () => {
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
    });
  };

  return (
    <StepsProvider>
      <Step step={1}>
        <PhoneNumber setPhoneNumber={handlePhoneNumber} />
      </Step>
      <Step step={2}>
        <Confirmation
          phone_number={data.phone_number}
          saveTokenAndId={handleTokenAnUserId}
        />
      </Step>
      <Step step={3}>
        <CheckUserType token={data.token} />
      </Step>
      <Step step={4}>
        {localStorage.getItem('userType') === 'customer' ? (
          <ThirdStep
            handleLogin={handleLogin}
            token={data.token}
            user_id={data.user_id}
          />
        ) : (
          <ThirdStepDriver token={data.token} />
        )}
      </Step>
      <Step step={5}>
        <FourthStep handleLogin={handleLogin} token={data.token} />
      </Step>
    </StepsProvider>
  );
};

export default SignIn;
