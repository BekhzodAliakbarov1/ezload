import React, { useEffect } from 'react';
import SearchDriversFilter from './search-drivers-filter';
import { SearchDriversWrapper, SearhDriversBox } from './search-drivers.styles';
import SearchDriversList from './serach-drivers-list';
import qs from 'qs';
import { useSearchDrivers } from 'server-state/queries/use-drivers';

export interface SearchDriverFilterType {
  pickup_point_country?: { id: string | string; title: string };
  pickup_point_region?: { id: string | string; title: string };
  destination_point_country?: { id: string | string; title: string };
  destination_point_region?: { id: string | string; title: string };
  weight?: string;
  rating?: number;
}

const SearchDrivers = () => {
  const searchDriversRequest = useSearchDrivers();

  const handleClick = (data: SearchDriverFilterType) => {
    const queryData = {
      ...data,
      pickup_point_country: data.pickup_point_country?.id,
      pickup_point_region: data.pickup_point_region?.id,
      destination_point_country: data.destination_point_country?.id,
      destination_point_region: data.destination_point_region?.id,
    };
    const query = qs.stringify(queryData);
    searchDriversRequest.mutate(
      { query },
      {
        onSuccess(res) {
          console.log(res);
        },
      }
    );
  };
  useEffect(() => {
    searchDriversRequest.mutate({ query: '' });
  }, []);

  return (
    <SearchDriversWrapper>
      <SearhDriversBox>
        <SearchDriversFilter handleClick={handleClick} />
        <SearchDriversList />
      </SearhDriversBox>
    </SearchDriversWrapper>
  );
};

export default SearchDrivers;
