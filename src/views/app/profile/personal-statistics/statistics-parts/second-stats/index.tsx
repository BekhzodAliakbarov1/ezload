import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SecondStatsWrapper } from './second-stats.styles';

const SecondStats = () => {
  const { t } = useTranslation();
  return (
    <SecondStatsWrapper>
      <Text weight="700">{t('Load numbers by date')}</Text>
    </SecondStatsWrapper>
  );
};

export default SecondStats;
