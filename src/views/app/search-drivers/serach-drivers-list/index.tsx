import React from 'react';
import DriverCard from 'components/cards/driver-card';
import Text from 'components/typography/text';
import {
  SearchDriversListItemsWrapper,
  SearchDriversListWrapper,
} from './search-drivers-list.styles';
import image from 'assets/img/profile.png';
import { Link } from 'react-router-dom';
const data = [
  {
    id: 1,
    load_weight: '20 Ton',
    car_type: 'Isuzu ',
    image: image,
    name: 'Igor Tsoy',
    rating: 4,
    load_number: '100+',
  },
  {
    id: 2,
    load_weight: '1000 Ton',
    car_type: 'Volvo',
    image: image,
    name: 'Farid Ahmedov',
    rating: 3,
    load_number: '400+',
  },
  {
    id: 3,
    load_weight: '20 Ton',
    car_type: 'Isuzu ',
    image: image,
    name: 'Igor Tsoy',
    rating: 3,
    load_number: '100+',
  },
  {
    id: 4,
    load_weight: '20 Ton',
    car_type: 'Isuzu ',
    image: image,
    name: 'Igor Tsoy',
    rating: 3,
    load_number: '100+',
  },
  {
    id: 5,
    load_weight: '20 Ton',
    car_type: 'Isuzu ',
    image: image,
    name: 'Igor Tsoy',
    rating: 3,
    load_number: '100+',
  },
  {
    id: 6,
    load_weight: '20 Ton',
    car_type: 'Isuzu ',
    image: image,
    name: 'Igor Tsoy',
    rating: 3,
    load_number: '100+',
  },
];

const SearchDriversList = () => {
  return (
    <SearchDriversListWrapper>
      <Text weight="700">Top drivers</Text>
      <SearchDriversListItemsWrapper>
        {data.map((driver) => (
          <Link key={driver.id} to={`/drivers/${driver.id}`}>
            <DriverCard sizes="104px" {...driver} />
          </Link>
        ))}
      </SearchDriversListItemsWrapper>
      <Text weight="700">Drivers I worked with before</Text>
      <SearchDriversListItemsWrapper>
        {data.map((driver) => (
          <DriverCard sizes="104px" key={driver.id} {...driver} />
        ))}
      </SearchDriversListItemsWrapper>
    </SearchDriversListWrapper>
  );
};

export default SearchDriversList;
