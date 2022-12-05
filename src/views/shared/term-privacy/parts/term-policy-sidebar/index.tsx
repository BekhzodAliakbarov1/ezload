import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import {
  TermSidebarelementsWrapper,
  StyledLink,
} from './term-policy-sidebar.styles';

const TermsAndPolicySidebar = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  return (
    <TermSidebarelementsWrapper>
      <Link to="/info">
        <StyledLink active={pathname === '/info'} weight="700">
          {t('Privacy Policy')}
        </StyledLink>
      </Link>
      <Link to="/info/term-condition">
        <StyledLink
          active={pathname.includes('/info/term-condition')}
          weight="700"
        >
          {t('Terms of Use')}
        </StyledLink>
      </Link>
      <Link to="/info/copyrights">
        <StyledLink active={pathname.includes('/info/copyrights')} weight="700">
          {t('Copyrights')}
        </StyledLink>
      </Link>
    </TermSidebarelementsWrapper>
  );
};

export default TermsAndPolicySidebar;
