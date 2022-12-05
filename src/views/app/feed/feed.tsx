import Button from 'components/button/button';
import LocationIcon from 'components/icons/location.icon';
import RightShowIcon from 'components/icons/right-show.icon';
import Text from 'components/typography/text';
import {
  BackgrounImageWrapper,
  FeedDataWrapper,
  FeedLocationCard,
  FeedLocationWrapper,
  FeedStatisticsCard,
  FeedStatisticsWrapper,
  FeedWrapper,
  LocationAndSvgWrapper,
} from './feed.styles';
import leftImage from 'assets/img/left-bg-image.png';
import rightImage from 'assets/img/right-bg-image.png';
import { useDriver } from 'hooks/use-driver';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { usePlaceStats } from 'server-state/queries/use-place-stats';
import CountUp from 'react-countup';

const Feed = () => {
  const { isDriver } = useDriver();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data } = usePlaceStats();

  const handleClick = () => {
    if (isDriver) {
      navigate('/search-load');
    } else {
      navigate('/create-load');
    }
  };

  return (
    <FeedWrapper>
      <FeedDataWrapper>
        <Text weight="800">{t('Sending cargo is now easy')}</Text>
        <Text weight="500">
          {t('Internationally or regionally, simple process, simple delivery')}
        </Text>
        <FeedLocationWrapper>
          <FeedLocationCard>
            <Text weight="600">{t('Pickup location')}</Text>
            <LocationAndSvgWrapper>
              <LocationIcon />
              <Text weight="500">{t('Tashkent, Uzbekistan')}</Text>
            </LocationAndSvgWrapper>
          </FeedLocationCard>
          <FeedLocationCard>
            <Text weight="600">{t('Delivery location')}</Text>
            <LocationAndSvgWrapper>
              <LocationIcon />

              <Text weight="500">{t('Moscow, Russia')}</Text>
            </LocationAndSvgWrapper>
          </FeedLocationCard>
        </FeedLocationWrapper>
        <Button
          onClick={handleClick}
          aria-label="serch create load"
          endIcon={<RightShowIcon />}
        >
          {isDriver ? t('Search loads') : t('Create Load')}
        </Button>
      </FeedDataWrapper>
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
      <BackgrounImageWrapper src={leftImage} alt="left image" position="left" />
      <BackgrounImageWrapper
        src={rightImage}
        alt="right image"
        position="right"
      />
    </FeedWrapper>
  );
};

export default Feed;
