import React from 'react';
import AppViews from 'views/app/';
import styled from 'styled-components';
import Container from 'wrappers/container/container';

const Main = styled.main`
  width: 100%;
  height: 100%;
  flex: 1 1 auto;
`;

const AppLayout: React.FC = () => (
  <>
    <Main>
      <Container>
        <AppViews />
      </Container>
    </Main>
  </>
);

export default AppLayout;
