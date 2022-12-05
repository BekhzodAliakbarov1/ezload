import React, { useEffect } from 'react';
import {
  TermAndPolicyWrapper,
  Main,
  InformationTextBox,
} from './term-privacy.styles';

import Container from 'wrappers/container/container';
import Navbar from 'components/navbar/navbar';
import Footer from 'components/footer';
import TermsAndPolicySidebar from './parts/term-policy-sidebar';
import { Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './parts/privacy-policy';
import TermsAndCondition from './parts/terms-condition';
import Copyrights from './parts/copyrights';
import { usePrivacyPolicy } from 'server-state/queries/use-privacy-policy';
import i18next from 'i18next';

const TermAndPolicy = () => {
  const privacyPolicy = usePrivacyPolicy({ language: i18next.language });

  return (
    <>
      <Main>
        <Container>
          <Navbar />
          <TermAndPolicyWrapper>
            <TermsAndPolicySidebar />
            <InformationTextBox>
              <Routes>
                <Route path="/" element={<PrivacyPolicy />} />
                <Route path="/term-condition" element={<TermsAndCondition />} />
                <Route path="/copyrights" element={<Copyrights />} />
              </Routes>
            </InformationTextBox>
          </TermAndPolicyWrapper>
        </Container>
        <Footer />
      </Main>
    </>
  );
};

export default TermAndPolicy;
