import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePrivacyPolicy } from 'server-state/queries/use-privacy-policy';

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const { data } = usePrivacyPolicy({
    language: localStorage.getItem('language') ?? undefined,
  });
  console.log(data);

  return (
    <>
      <h1>{t('Privacy and policy')}</h1>
      <p>{data?.results?.[0].title}</p>
    </>
  );
};

export default PrivacyPolicy;
