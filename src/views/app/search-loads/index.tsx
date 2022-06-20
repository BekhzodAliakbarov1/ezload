import React from 'react';
import SearchLoadsFilter from './search-loads-filter';
import SearchLoadsList from './search-loads-list';
import { SearchLoadsWrapper, SearhLoadsBox } from './search-loads.styles';

const SearchLoads = () => {
  return (
    <SearchLoadsWrapper>
      <SearhLoadsBox>
        <SearchLoadsFilter />
        <SearchLoadsList />
      </SearhLoadsBox>
    </SearchLoadsWrapper>
  );
};

export default SearchLoads;
