import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SecondStatsWrapper } from './second-stats.styles';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { colors } from 'styles/variables';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SecondStats = () => {
  const { t } = useTranslation();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Delivered',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: colors.red_100,
      },
      {
        label: 'On the way',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: colors.green_90,
      },
      {
        label: 'New',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: colors.dark_60,
      },
    ],
  };
  return (
    <SecondStatsWrapper>
      <Text weight="700">{t('Load numbers by date')}</Text>
      <Bar options={options} data={data} />
    </SecondStatsWrapper>
  );
};

export default SecondStats;
