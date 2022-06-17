import React from 'react';
import image from 'assets/img/login-bg-image.jpg';
import logo from 'assets/img/logo-white.svg';
import styled from 'styled-components';
import CustomerSignIn from 'views/auth/sign-in/customer/customer-sign-in';
import { colors } from 'styles/variables';

export const SignInLayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${colors.green_5};
`;

export const SignInImageWrapper = styled.div`
  width: 50%;
  height: 100vh;
  max-width: 705px;
  background-repeat: no-repeat;
  background-position-x: -25px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  img {
    margin-top: 32px;
    margin-left: 75px;
  }
`;

const SignInLayout: React.FC<{ type: 'customer' | 'driver' | '' }> = ({
  type,
}) => {
  return (
    <SignInLayoutWrapper>
      <SignInImageWrapper style={{ backgroundImage: `url(${image})` }}>
        <img src={logo} alt="Logo" />
      </SignInImageWrapper>
      {type === 'customer' ? <CustomerSignIn /> : ''}
    </SignInLayoutWrapper>
  );
};

export default SignInLayout;
