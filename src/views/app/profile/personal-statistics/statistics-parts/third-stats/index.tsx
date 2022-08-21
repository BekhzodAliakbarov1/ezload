import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { colors } from 'styles/variables';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ThirdStatsContainer } from './third-stats.styles';
ChartJS.register(ArcElement, Tooltip, Legend);

const ThirdStats = () => {
  const { t } = useTranslation();
  const allInfo = {
    all_bids: 456,
    rejected: 253,
    accepted: 203,
  };
  const data = {
    labels: ['Rejected', 'Accepted'],
    datasets: [
      {
        label: '%',
        data: [
          Math.round((allInfo.rejected * 100) / allInfo.all_bids),
          Math.round((allInfo.accepted * 100) / allInfo.all_bids),
        ],
        backgroundColor: [colors.red_100, colors.green_100],
        borderWidth: 1,
      },
    ],
  };
  return (
    <ThirdStatsContainer>
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        justifyContent="flex-start"
        gap="32px"
      >
        <Text weight="700">{t('Bids')}</Text>
        <Box display="flex" flexWrap="wrap" sx={{ gap: ['20px', '94px'] }}>
          <Box display="flex" flexDirection="column" gap="16px">
            <Text size="sm">{t('All bids number')}</Text>
            <Text
              style={{ fontSize: '34px', lineHeight: '1.5' }}
              size="lg"
              weight="700"
            >
              456
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" gap="16px">
            <Text size="sm">{t('Rejected ')}</Text>
            <Typography fontSize="34px" fontWeight="700" color={colors.red_90}>
              223
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap="16px">
            <Text size="sm">{t('Accepted')}</Text>
            <Typography
              fontSize="34px"
              fontWeight="700"
              color={colors.green_100}
            >
              223
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: ['100%', '100%', '380px'],
        }}
      >
        <Doughnut data={data} options={{ responsive: true }} />
      </Box>
    </ThirdStatsContainer>
  );
};

export default ThirdStats;
