import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { colors } from 'styles/variables';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from '@ant-design/plots';
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
  bids_waiting?: number;
}> = ({
  all_bids_number = 0,
  bids_accepted = 0,
  bids_rejected = 0,
  bids_waiting = 0,
}) => {
  const { t } = useTranslation();
  const data = [
    {
      type: t('Rejected'),
      value: bids_rejected,
    },
    {
      type: t('Accepted'),
      value: bids_accepted,
    },
    {
      type: t('Awaiting'),
      value: bids_waiting,
    },
  ];

  // const data = {
  //   // labels: ['Rejected', 'Accepted'],
  //   datasets: [
  //     {
  //       label: '%',
  //       data: [
  //         Math.round((bids_rejected * 100) / all_bids_number),
  //         Math.round((bids_accepted * 100) / all_bids_number),
  //       ],
  //       backgroundColor: [colors.red_100, colors.green_100],
  //       borderWidth: 1,
  //     },
  //   ],
  // };
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
            <Text size="sm">{t('Awaiting response')}</Text>
            <Text>{bids_waiting}</Text>
          </CardsBox>
          <CardsBox>
            <Text size="sm">{t('Rejected')}</Text>
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
            alignSelf: 'center',
          }}
        >
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
          {/* <Doughnut
            data={data}
            options={{
              responsive: true,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (item) => {
                      const value = item.parsed;
                      const sum = item.dataset.data.reduce(
                        (overal, current) => overal + Number(current),
                        0
                      );
                      const result = `${Math.floor(
                        (value * 100) / sum
                      )}%  in ${sum}%`;
                      return result;
                    },
                  },
                },
              },
            }}
          /> */}
        </Box>
      )}
    </ThirdStatsContainer>
  );
};

export default ThirdStats;
