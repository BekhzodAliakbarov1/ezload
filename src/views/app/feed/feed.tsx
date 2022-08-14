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
  return (
    <FeedWrapper>
      <FeedDataWrapper>
        <Text weight="800">Sending cargo is now easy</Text>
        <Text weight="500">
          Internationally or regionally, simple process, simple delivery
        </Text>
        <FeedLocationWrapper>
          <FeedLocationCard>
            <Text weight="600">Pick up location</Text>
            <LocationAndSvgWrapper>
              <LocationIcon />
              <Text weight="500">Tashkent, Uzbekistan</Text>
            </LocationAndSvgWrapper>
          </FeedLocationCard>
          <FeedLocationCard>
            <Text weight="600">Delivery location</Text>
            <LocationAndSvgWrapper>
              <LocationIcon />

              <Text weight="500">Moscow, Russia</Text>
            </LocationAndSvgWrapper>
          </FeedLocationCard>
        </FeedLocationWrapper>
        <Button aria-label="serch create load" endIcon={<RightShowIcon />}>
          {isDriver ? 'Search Load' : 'Create Load'}
        </Button>
      </FeedDataWrapper>
      <FeedStatisticsWrapper>
        {feedStats.map(({ name, number, id }) => (
          <FeedStatisticsCard key={id}>
            <Text weight="700">{number}</Text>
            <Text weight="600">{name}</Text>
          </FeedStatisticsCard>
        ))}
      </FeedStatisticsWrapper>
      <BackgrounImageWrapper src={leftImage} alt="1212" position="left" />
      <BackgrounImageWrapper src={rightImage} alt="1212" position="right" />
    </FeedWrapper>
  );
};

export default Feed;
