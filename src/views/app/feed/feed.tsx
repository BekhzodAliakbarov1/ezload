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

const feedStats = [
  {
    id: 1,
    number: '7',
    name: 'Countries',
  },
  {
    id: 2,
    number: '98',
    name: 'Cities & Towns',
  },
  {
    id: 3,
    number: '24 / 7',
    name: 'Availibility',
  },
];

const Feed = () => {
  const { isDriver } = useDriver();
  const { t } = useTranslation();

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
              <Text weight="500">Tashkent, Uzbekistan</Text>
            </LocationAndSvgWrapper>
          </FeedLocationCard>
          <FeedLocationCard>
            <Text weight="600">{t('Delivery location')}</Text>
            <LocationAndSvgWrapper>
              <LocationIcon />

              <Text weight="500">Moscow, Russia</Text>
            </LocationAndSvgWrapper>
          </FeedLocationCard>
        </FeedLocationWrapper>
        <Button aria-label="serch create load" endIcon={<RightShowIcon />}>
          {isDriver ? t('Search loads') : t('Create Load')}
        </Button>
      </FeedDataWrapper>
      <FeedStatisticsWrapper>
        {feedStats.map(({ name, number, id }) => (
          <FeedStatisticsCard key={id}>
            <Text weight="700">{number}</Text>
            <Text weight="600">{t(name)}</Text>
          </FeedStatisticsCard>
        ))}
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
