import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  HeaderAndYearWrapper,
  SecondStatsWrapper,
} from './second-stats.styles';
import { Bar } from 'react-chartjs-2';
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
import { ChartResponse } from 'server-state/queries/use-get-stats';
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const SecondStats: React.FC<
  ChartResponse & {
    year: string;
    onChange: (
      event: SelectChangeEvent<string>,
      child: React.ReactNode
    ) => void;
  }
> = ({
  delivered_apr_count = 0,
  delivered_aug_count = 0,
  delivered_dec_count = 0,
  delivered_feb_count = 0,
  delivered_jan_count = 0,
  delivered_jul_count = 0,
  delivered_jun_count = 0,
  delivered_mar_count = 0,
  delivered_may_count = 0,
  delivered_nov_count = 0,
  delivered_oct_count = 0,
  delivered_sep_count = 0,
  new_apr_count = 0,
  new_aug_count = 0,
  new_dec_count = 0,
  new_feb_count = 0,
  new_jan_count = 0,
  new_jul_count = 0,
  new_jun_count = 0,
  new_mar_count = 0,
  new_may_count = 0,
  new_nov_count = 0,
  new_oct_count = 0,
  new_sep_count = 0,
  on_the_way_apr_count = 0,
  on_the_way_aug_count = 0,
  on_the_way_dec_count = 0,
  on_the_way_feb_count = 0,
  on_the_way_jan_count = 0,
  on_the_way_jul_count = 0,
  on_the_way_jun_count = 0,
  on_the_way_mar_count = 0,
  on_the_way_may_count = 0,
  on_the_way_nov_count = 0,
  on_the_way_oct_count = 0,
  on_the_way_sep_count = 0,
  onChange,
  year,
}) => {
  const { t } = useTranslation();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };
  const labels = [
    t('Jan'),
    t('Feb'),
    t('Mar'),
    t('Apr'),
    t('May'),
    t('Jun'),
    t('Jul'),
    t('Aug'),
    t('Sep'),
    t('Oct'),
    t('Nov'),
    t('Dec'),
  ];

  const data = {
    labels,
    datasets: [
      {
        label: t('Delivered'),
        data: [
          delivered_jan_count,
          delivered_feb_count,
          delivered_mar_count,
          delivered_apr_count,
          delivered_may_count,
          delivered_jun_count,
          delivered_jul_count,
          delivered_aug_count,
          delivered_sep_count,
          delivered_oct_count,
          delivered_nov_count,
          delivered_dec_count,
        ],
        backgroundColor: colors.red_100,
      },
      {
        label: t('On the way'),
        data: [
          new_jan_count,
          new_feb_count,
          new_mar_count,
          new_apr_count,
          new_may_count,
          new_jun_count,
          new_jul_count,
          new_aug_count,
          new_sep_count,
          new_oct_count,
          new_nov_count,
          new_dec_count,
        ],
        backgroundColor: colors.green_90,
      },
      {
        label: t('New'),
        data: [
          on_the_way_jan_count,
          on_the_way_feb_count,
          on_the_way_mar_count,
          on_the_way_apr_count,
          on_the_way_may_count,
          on_the_way_jun_count,
          on_the_way_jul_count,
          on_the_way_aug_count,
          on_the_way_sep_count,
          on_the_way_oct_count,
          on_the_way_nov_count,
          on_the_way_dec_count,
        ],
        backgroundColor: colors.dark_60,
      },
    ],
  };
  return (
    <SecondStatsWrapper>
      <HeaderAndYearWrapper>
        <Text weight="700">{t('Load numbers by date')}</Text>
        <FormControl>
          <Select value={year} onChange={onChange}>
            <MenuItem value={2022}>2022</MenuItem>
            <MenuItem value={2023}>2023</MenuItem>
            <MenuItem value={2024}>2024</MenuItem>
            <MenuItem value={2025}>2025</MenuItem>
            <MenuItem value={2026}>2026</MenuItem>
            <MenuItem value={2027}>2027</MenuItem>
            <MenuItem value={2028}>2028</MenuItem>
          </Select>
        </FormControl>
      </HeaderAndYearWrapper>
      <Bar options={options} data={data} />
    </SecondStatsWrapper>
  );
};

export default SecondStats;
