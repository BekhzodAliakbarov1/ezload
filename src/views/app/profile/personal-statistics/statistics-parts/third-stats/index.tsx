import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { colors } from 'styles/variables';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
  CardsBox,
  InformationContainer,
  ThirdStatsContainer,
  ThreeCrdsWrapper,
} from './third-stats.styles';
ChartJS.register(ArcElement, Tooltip, Legend);

const ThirdStats: React.FC<{
  all_bids_number?: number;
  bids_accepted?: number;
  bids_rejected?: number;
}> = ({ all_bids_number = 0, bids_accepted = 0, bids_rejected = 0 }) => {
  const { t } = useTranslation();

  const data = {
    // labels: ['Rejected', 'Accepted'],
    datasets: [
      {
        label: '%',
        data: [
          Math.round((bids_rejected * 100) / all_bids_number),
          Math.round((bids_accepted * 100) / all_bids_number),
        ],
        backgroundColor: [colors.red_100, colors.green_100],
        borderWidth: 1,
      },
    ],
  };
  return (
    <ThirdStatsContainer>
      <InformationContainer>
        <Text weight="700">{t('Bids')}</Text>
        <ThreeCrdsWrapper>
          <CardsBox>
            <Text size="sm">{t('All bids number')}</Text>
            <Text>{all_bids_number}</Text>
          </CardsBox>
          <CardsBox>
            <Text size="sm">{t('Rejected ')}</Text>
            <Typography color={colors.red_90}>{bids_rejected}</Typography>
          </CardsBox>
          <CardsBox>
            <Text size="sm">{t('Accepted')}</Text>
            <Typography color={colors.green_100}>{bids_accepted}</Typography>
          </CardsBox>
        </ThreeCrdsWrapper>
      </InformationContainer>
      {all_bids_number > 0 && (
        <Box
          sx={{
            maxWidth: ['70%', '70%', '380px'],
            alignSelf: 'flex-start',
          }}
        >
          <Doughnut data={data} options={{ responsive: true }} />
        </Box>
      )}
    </ThirdStatsContainer>
  );
};

export default ThirdStats;
