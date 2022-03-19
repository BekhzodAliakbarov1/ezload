import Container from 'wrappers/container/container';
import React from 'react';
import styled from 'styled-components';
import AuthViews from 'views/auth';

const Main = styled.main`
  width: 100%;
  height: 100%;
  flex: 1 1 auto;
`;

const AuthLayout = () => (
  <React.Fragment>
    <Main>
      <Container>
        <AuthViews />
      </Container>
    </Main>
  </React.Fragment>
);

export default AuthLayout;
