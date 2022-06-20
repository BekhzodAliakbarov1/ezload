import LoadsContainer from 'components/loads-container/loads-container';
import Text from 'components/typography/text';
import React from 'react';
import { SearchLoadsListWrapper } from './search-loads-list.styles';

const date = new Date();

const data = [
  {
    id: 1,
    pickup_address: 'Asaka city, Andijan region',
    pickup_country: 'Uzbekistan',
    pickup_date: date.toUTCString(),
    deliver_address: 'Tashkent city, Andijan region',
    deliver_country: 'Uzbekistan',
    deliver_date: date.toUTCString(),
    distance: '894 km',
    bid_count: '232',
    view_count: 2332,
  },
  {
    id: 2,
    pickup_address: 'Asaka city, Andijan region',
    pickup_country: 'Uzbekistan',
    pickup_date: date.toUTCString(),
    deliver_address: 'Tashkent city, Andijan region',
    deliver_country: 'Uzbekistan',
    deliver_date: date.toUTCString(),
    distance: '894 km',
    bid_count: '232',
    view_count: 2332,
  },
  {
    id: 3,
    pickup_address: 'Asaka city, Andijan region',
    pickup_country: 'Uzbekistan',
    pickup_date: date.toUTCString(),
    deliver_address: 'Tashkent city, Andijan region',
    deliver_country: 'Uzbekistan',
    deliver_date: date.toUTCString(),
    distance: '894 km',
    bid_count: '232',
    view_count: 2332,
  },
  {
    id: 4,
    pickup_address: 'Asaka city, Andijan region',
    pickup_country: 'Uzbekistan',
    pickup_date: date.toUTCString(),
    deliver_address: 'Tashkent city, Andijan region',
    deliver_country: 'Uzbekistan',
    deliver_date: date.toUTCString(),
    distance: '894 km',
    bid_count: '232',
    view_count: 2332,
  },
  {
    id: 5,
    pickup_address: 'Asaka city, Andijan region',
    pickup_country: 'Uzbekistan',
    pickup_date: date.toUTCString(),
    deliver_address: 'Tashkent city, Andijan region',
    deliver_country: 'Uzbekistan',
    deliver_date: date.toUTCString(),
    distance: '894 km',
    bid_count: '232',
    view_count: 2332,
  },
  {
    id: 6,
    pickup_address: 'Asaka city, Andijan region',
    pickup_country: 'Uzbekistan',
    pickup_date: date.toUTCString(),
    deliver_address: 'Tashkent city, Andijan region',
    deliver_country: 'Uzbekistan',
    deliver_date: date.toUTCString(),
    distance: '894 km',
    bid_count: '232',
    view_count: 2332,
  },
];

const SearchLoadsList = () => {
  return (
    <SearchLoadsListWrapper>
      <Text weight="700">Top drivers</Text>
      <LoadsContainer clickable loads={data} />
    </SearchLoadsListWrapper>
  );
};

export default SearchLoadsList;
