import Text from 'components/typography/text';
import React from 'react';
import { PersonalStatisticsWrapper } from './personal-statistics.styles';
import FirstStats from './statistics-parts/first-stats';
import SecondStats from './statistics-parts/second-stats';

const PersonalStatistics = () => {
  return (
    <PersonalStatisticsWrapper>
      <Text>My statistics</Text>
      <FirstStats />
      <SecondStats />
    </PersonalStatisticsWrapper>
  );
};

export default PersonalStatistics;
