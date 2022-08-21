import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FirstStatsWrapper } from './first-stats.styles';
import Text from 'components/typography/text';
import { useTranslation } from 'react-i18next';
import { Doughnut } from 'react-chartjs-2';
import { Box } from '@mui/system';

ChartJS.register(ArcElement, Tooltip, Legend);

const FirstStats = () => {
  const { t } = useTranslation();
  return (
    <FirstStatsWrapper>
      <Text weight="700">{t('Load numbers by status')}</Text>
      <Box
        sx={{
          maxWidth: ['100%', '100%', '380px'],
        }}
      >
        <Doughnut
          width={100}
          height={100}
          options={{ responsive: true }}
          data={{
            labels: ['Delivered', 'On the way', 'New'],

            datasets: [
              {
                label: 'helcbdfuhskcbrouyw',
                data: [12, 19, 3],
                backgroundColor: ['#EA694D', '#4FBC9F', '#6B7C82'],
                borderWidth: 1,
                spacing: 5,
                rotation: 20,
              },
            ],
          }}
        />
      </Box>
    </FirstStatsWrapper>
  );
};

export default FirstStats;
