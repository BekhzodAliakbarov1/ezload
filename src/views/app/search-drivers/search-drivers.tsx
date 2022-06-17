import React from 'react';
import SearchDriversFilter from './search-drivers-filter';
import { SearchDriversWrapper, SearhDriversBox } from './search-drivers.styles';
import SearchDriversList from './serach-drivers-list';

const SearchDrivers = () => {
  return (
    <SearchDriversWrapper>
      <SearhDriversBox>
        <SearchDriversFilter />
        <SearchDriversList />
      </SearhDriversBox>
    </SearchDriversWrapper>
  );
};

export default SearchDrivers;
