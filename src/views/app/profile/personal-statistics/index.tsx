import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { PersonalStatisticsWrapper } from './personal-statistics.styles';
import FirstStats from './statistics-parts/first-stats';
import FourStats from './statistics-parts/four-stats';
import SecondStats from './statistics-parts/second-stats';
import ThirdStats from './statistics-parts/third-stats';

const PersonalStatistics = () => {
  const { t } = useTranslation();
  return (
    <PersonalStatisticsWrapper>
      <Text>{t('My statistics')}</Text>
      <FirstStats />
      <SecondStats />
      <ThirdStats />
      <FourStats />
    </PersonalStatisticsWrapper>
  );
};

export default PersonalStatistics;
