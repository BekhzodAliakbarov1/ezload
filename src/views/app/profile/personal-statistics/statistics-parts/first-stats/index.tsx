import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FirstStatsWrapper } from './first-stats.styles';
import Text from 'components/typography/text';
import { useTranslation } from 'react-i18next';
import { Pie } from '@ant-design/plots';

// import Chart from 'react-apexcharts';
ChartJS.register(ArcElement, Tooltip, Legend);

const FirstStats: React.FC<{
  new_count?: number;
  delivered_count?: number;
  on_the_way_count?: number;
}> = ({ delivered_count = 0, new_count = 0, on_the_way_count = 0 }) => {
  const { t } = useTranslation();

  const data = [
    {
      type: t('Delivered'),
      value: delivered_count,
    },
    {
      type: t('On the way'),
      value: on_the_way_count,
    },
    {
      type: t('New'),
      value: new_count,
    },
  ];
  return (
    <FirstStatsWrapper>
      <Text weight="700">{t('Load numbers by status')}</Text>

      <Pie
        {...{
          appendPadding: 10,
          color: ['#EA694D', '#4FBC9F', '#6B7C82'],
          data,
          angleField: 'value',
          colorField: 'type',
          radius: 1,
          innerRadius: 0.64,
          meta: {
            value: {
              formatter: (v: string) => `${v}`,
            },
          },
          label: {
            type: 'inner',
            offset: '-50%',

            style: {
              textAlign: 'center',
            },
            autoRotate: false,
            content: '{value}',
          },
          statistic: {
            title: {
              offsetY: -4,
              content: t('Total'),
            },
            content: {
              offsetY: 4,
              style: {
                fontSize: '32px',
              },
            },
          },
          interactions: [
            {
              type: 'element-selected',
            },
            {
              type: 'element-active',
            },
            {
              type: 'pie-statistic-active',
            },
          ],
          legend: {
            position: 'right',
          },
        }}
      />
    </FirstStatsWrapper>
  );
};

export default FirstStats;
function renderStatistic(d: number, text: any, arg2: { fontSize: number }) {
  throw new Error('Function not implemented.');
}
