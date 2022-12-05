import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePrivacyPolicy } from 'server-state/queries/use-privacy-policy';

const Copyrights = () => {
  const { t } = useTranslation();
  const { data } = usePrivacyPolicy({
    language: localStorage.getItem('language') ?? undefined,
  });

  return (
    <>
      <h1>{t('Copyrights')}</h1>
      <p>{data?.title}</p>
    </>
  );
};

export default Copyrights;
