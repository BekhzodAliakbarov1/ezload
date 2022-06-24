import Text from 'components/typography/text';
import {
  FeedStatisticsCard,
  FeedStatisticsWrapper,
} from 'views/app/feed/feed.styles';
import { AvailibilityWrapper } from './availibility.styles';

const Availibility = () => {
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
  return (
    <AvailibilityWrapper>
      <FeedStatisticsWrapper>
        {feedStats.map(({ name, number, id }) => (
          <FeedStatisticsCard key={id}>
            <Text weight="700">{number}</Text>
            <Text weight="600">{name}</Text>
          </FeedStatisticsCard>
        ))}
      </FeedStatisticsWrapper>
    </AvailibilityWrapper>
  );
};

export default Availibility;
