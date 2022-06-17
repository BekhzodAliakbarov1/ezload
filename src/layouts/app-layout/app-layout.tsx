import React from 'react';
import AppViews from 'views/app/';
import styled from 'styled-components';
import Container from 'wrappers/container/container';
import Navbar from 'components/navbar/navbar';
import { colors } from 'styles/variables';
import Footer from 'components/footer';

const Main = styled.main`
  width: 100%;
  height: 100%;
  flex: 1 1 auto;
  background-color: ${colors.green_5};
`;

const AppLayout: React.FC = () => (
  <>
    <Main>
      <Container>
        <Navbar />
        <AppViews />
      </Container>
      <Footer />
    </Main>
  </>
);

export default AppLayout;
