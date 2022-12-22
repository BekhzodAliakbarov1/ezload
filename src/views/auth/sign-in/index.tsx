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
    userType: 'customer' | 'driver' | string;
    name: string;
  }>({
    phone_number: '',
    token: '',
    user_id: '',
    userType: '',
    name: '',
  });
  const { login } = useAuth();

  const handlePhoneNumber = (phone_number: string) => {
    setData({ ...data, phone_number });
  };
  const handleTokenAnUserId = (accessToken: string, user_id: string) => {
    setData({ ...data, token: accessToken, user_id });
  };

  const setUserType = (userType: 'customer' | 'driver' | string) => {
    setData({ ...data, userType });
  };

  const setUserName = (username: string) => {
    setData({ ...data, name: username });
  };

  const handleLogin = () => {
    login({
      tokens: { access: data.token, refresh: '' },
      userId: data.user_id,
      userType: data.userType,
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
        <CheckUserType
          handleLogin={handleLogin}
          token={data.token}
          setUserType={setUserType}
          setUserName={setUserName}
        />
      </Step>
      <Step step={4}>
        <ThirdStepDriver token={data.token} name={data.name} />
      </Step>
      <Step step={5}>
        <FourthStep handleLogin={handleLogin} token={data.token} />
      </Step>
    </StepsProvider>
  );
};

export default SignIn;
