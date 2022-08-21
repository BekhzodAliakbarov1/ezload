import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FourStyledContainer,
  MoneyStatsRow,
  MoneyStatsWrapper,
} from './four-stats.styles';

const FourStats = () => {
  const { t } = useTranslation();
  return (
    <FourStyledContainer>
      <Text>{t('Earned amount')}</Text>
      <MoneyStatsWrapper>
        <MoneyStatsRow>
          <h3>3 000 </h3>
          <Text>USD</Text>
        </MoneyStatsRow>
        <MoneyStatsRow>
          <h3>456 000 </h3>
          <Text>RUB</Text>
        </MoneyStatsRow>
        <MoneyStatsRow>
          <h3>3 700 000 </h3>
          <Text>UZS</Text>
        </MoneyStatsRow>
      </MoneyStatsWrapper>
    </FourStyledContainer>
  );
};

export default FourStats;
