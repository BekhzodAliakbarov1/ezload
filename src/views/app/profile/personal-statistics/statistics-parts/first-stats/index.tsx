import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FirstStatsWrapper } from './first-stats.styles';
import Text from 'components/typography/text';
import { useTranslation } from 'react-i18next';

ChartJS.register(ArcElement, Tooltip, Legend);

const FirstStats = () => {
  const { t } = useTranslation();
  return (
    <FirstStatsWrapper>
      <Text weight="700">{t('Load numbers by status')}</Text>
      {/* <Doughnut
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
              spacing: 15,
              rotation: 20,
            },
          ],
        }}
      /> */}
    </FirstStatsWrapper>
  );
};

export default FirstStats;
