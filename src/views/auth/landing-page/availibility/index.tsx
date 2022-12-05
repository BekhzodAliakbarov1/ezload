import Text from 'components/typography/text';
import { useTranslation } from 'react-i18next';
import { usePlaceStats } from 'server-state/queries/use-place-stats';
import {
  AvailibilityWrapper,
  FeedStatisticsWrapper,
  FeedStatisticsCard,
} from './availibility.styles';
import CountUp from 'react-countup';

const Availibility = () => {
  const { t } = useTranslation();
  const { data } = usePlaceStats();

  return (
    <AvailibilityWrapper>
      <FeedStatisticsWrapper>
        <FeedStatisticsCard>
          <Text weight="700">
            <CountUp
              start={0}
              end={Number(data?.country_count)}
              duration={1.1}
            />
          </Text>
          <Text weight="600">{t('Countries')}</Text>
        </FeedStatisticsCard>
        <FeedStatisticsCard>
          <Text weight="700">
            <CountUp
              start={0}
              end={Number(data?.region_count)}
              duration={1.1}
            />
          </Text>
          <Text weight="600">{t('Cities & Towns')}</Text>
        </FeedStatisticsCard>
        <FeedStatisticsCard>
          <Text weight="700">24 / 7</Text>
          <Text weight="600">{t('Availibility')}</Text>
        </FeedStatisticsCard>
      </FeedStatisticsWrapper>
    </AvailibilityWrapper>
  );
};

export default Availibility;
