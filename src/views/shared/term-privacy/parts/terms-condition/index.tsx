import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePrivacyPolicy } from 'server-state/queries/use-privacy-policy';

const TermsAndCondition = () => {
  const { t } = useTranslation();
  const { data } = usePrivacyPolicy({
    language: localStorage.getItem('language') ?? undefined,
  });

  return (
    <>
      <h1>{t('Terms of Use')}</h1>
      <p>{data?.results?.[0].title}</p>
    </>
  );
};

export default TermsAndCondition;
