import React, { useState } from 'react';
import SearchLoadsFilter from './search-loads-filter';
import SearchLoadsList from './search-loads-list';
import { SearchLoadsWrapper, SearchLoadsBox } from './search-loads.styles';
import qs from 'qs';
import { useSearchLoads } from 'server-state/queries/use-loads';

export interface SearchLoadFilterType {
  pickup_point_country?: { id: string | string; title: string };
  pickup_point_region?: { id: string | string; title: string };
  destination_country?: { id: string | string; title: string };
  destination_region?: { id: string | string; title: string };
  weight?: string;
  pickup_date?: string | Date;
  deliver_date?: string | Date;
  price_from?: string;
  price_to?: string;
  currency?: string;
}

const SearchLoads = () => {
  const [query, setQuery] = useState('');
  const searchLoadsRequest = useSearchLoads({ query });
  const handleClick = (data: SearchLoadFilterType) => {
    const queryData = {
      ...data,
      pickup_point_country: data.pickup_point_country?.id,
      pickup_point_region: data.pickup_point_region?.id,
      destination_country: data.destination_country?.id,
      destination_region: data.destination_region?.id,
    };
    setQuery(qs.stringify(queryData));
    // searchLoadsRequest.refetch();
  };
  return (
    <SearchLoadsWrapper>
      <SearchLoadsBox>
        <SearchLoadsFilter handleClick={handleClick} />
        <SearchLoadsList data={searchLoadsRequest.data?.results} />
      </SearchLoadsBox>
    </SearchLoadsWrapper>
  );
};

export default SearchLoads;
