import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FirstStatsWrapper } from './first-stats.styles';
import Text from 'components/typography/text';
import { useTranslation } from 'react-i18next';
import { Doughnut } from 'react-chartjs-2';
import { Box } from '@mui/system';

ChartJS.register(ArcElement, Tooltip, Legend);

const FirstStats: React.FC<{
  new_count?: number;
  delivered_count?: number;
  on_the_way_count?: number;
}> = ({ delivered_count = 0, new_count = 0, on_the_way_count = 0 }) => {
  const { t } = useTranslation();
  const data = {
    labels: ['Delivered', 'On the way', 'New'],

    datasets: [
      {
        label: 'helcbdfuhskcbrouyw',
        data: [delivered_count, on_the_way_count, new_count],
        backgroundColor: ['#EA694D', '#4FBC9F', '#6B7C82'],
        borderWidth: 1,
        spacing: 5,
        rotation: 20,
      },
    ],
  };
  return (
    <FirstStatsWrapper>
      <Text weight="700">{t('Load numbers by status')}</Text>
      <Box
        width="100%"
        sx={{
          maxWidth: ['80%', '80%', '380px'],
        }}
      >
        <Doughnut
          width={100}
          height={100}
          options={{ responsive: true }}
          data={data}
        />
      </Box>
    </FirstStatsWrapper>
  );
};

export default FirstStats;
