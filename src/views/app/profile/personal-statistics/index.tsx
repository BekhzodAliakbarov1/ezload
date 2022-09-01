import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStats } from 'server-state/queries/use-get-stats';
import { PersonalStatisticsWrapper } from './personal-statistics.styles';
import FirstStats from './statistics-parts/first-stats';
import FourStats from './statistics-parts/four-stats';
import SecondStats from './statistics-parts/second-stats';
import ThirdStats from './statistics-parts/third-stats';

const PersonalStatistics = () => {
  const { t } = useTranslation();

  const { data } = useStats({ year: 2022 });

  return (
    <PersonalStatisticsWrapper>
      <Text>{t('My statistics')}</Text>
      <FirstStats
        new_count={data?.new}
        delivered_count={data?.delivered}
        on_the_way_count={data?.on_the_way}
      />
      {data?.chart && <SecondStats {...data?.chart} />}
      <ThirdStats {...data} />
      <FourStats {...data} />
    </PersonalStatisticsWrapper>
  );
};

export default PersonalStatistics;
