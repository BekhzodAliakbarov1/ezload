import React, { useState } from 'react';
import SearchDriversFilter from './search-drivers-filter';
import { SearchDriversWrapper, SearhDriversBox } from './search-drivers.styles';
import SearchDriversList from './serach-drivers-list';
import qs from 'qs';
import { useSearchDrivers } from 'server-state/queries/use-drivers';

export interface SearchDriverFilterType {
  pickup_point_country?: { id: string | string; title: string };
  pickup_point_region?: { id: string | string; title: string };
  destination_country?: { id: string | string; title: string };
  destination_region?: { id: string | string; title: string };
  weight?: string;
  rating?: number;
}

const SearchDrivers = () => {
  const [query, setQuery] = useState('');
  const searchDriversRequest = useSearchDrivers({ query });

  const handleClick = (data: SearchDriverFilterType) => {
    const queryData = {
      ...data,
      pickup_point_country: data.pickup_point_country?.id,
      pickup_point_region: data.pickup_point_region?.id,
      destination_country: data.destination_country?.id,
      destination_region: data.destination_region?.id,
    };
    setQuery(qs.stringify(queryData));
    searchDriversRequest.refetch();
  };

  return (
    <SearchDriversWrapper>
      <SearhDriversBox>
        <SearchDriversFilter handleClick={handleClick} />
        <SearchDriversList drivers={searchDriversRequest.data?.results} />
      </SearhDriversBox>
    </SearchDriversWrapper>
  );
};

export default SearchDrivers;
