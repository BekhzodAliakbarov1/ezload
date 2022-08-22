import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { moneyFormatter } from 'utils/money-formatter';
import {
  FourStyledContainer,
  MoneyStatsRow,
  MoneyStatsWrapper,
} from './four-stats.styles';

const FourStats: React.FC<{
  earned_amount_rub?: number;
  earned_amount_usd?: number;
  earned_amount_uzs?: number;
}> = ({
  earned_amount_rub = 0,
  earned_amount_usd = 0,
  earned_amount_uzs = 0,
}) => {
  const { t } = useTranslation();
  return (
    <FourStyledContainer>
      <Text>{t('Earned amount')}</Text>
      <MoneyStatsWrapper>
        <MoneyStatsRow>
          <h3>
            {moneyFormatter({ currency: 'USD', number: earned_amount_usd })}
          </h3>
          <Text>USD</Text>
        </MoneyStatsRow>
        <MoneyStatsRow>
          <h3>
            {moneyFormatter({ currency: 'RUB', number: earned_amount_rub })}
          </h3>
          <Text>RUB</Text>
        </MoneyStatsRow>
        <MoneyStatsRow>
          <h3>
            {moneyFormatter({ currency: 'UZS', number: earned_amount_uzs })}
          </h3>
          <Text>UZS</Text>
        </MoneyStatsRow>
      </MoneyStatsWrapper>
    </FourStyledContainer>
  );
};

export default FourStats;
