import React, { useEffect } from 'react';
import SearchLoadsFilter from './search-loads-filter';
import SearchLoadsList from './search-loads-list';
import { SearchLoadsWrapper, SearchLoadsBox } from './search-loads.styles';
import qs from 'qs';
import { useSearchLoads } from 'server-state/queries/use-loads';

export interface SearchLoadFilterType {
  pickup_point_country?: { id: string | string; title: string };
  pickup_point_region?: { id: string | string; title: string };
  destination_point_country?: { id: string | string; title: string };
  destination_point_region?: { id: string | string; title: string };
  weight?: string;
  pickup_date?: string | Date;
  deliver_date?: string | Date;
  price_from?: string;
  price_to?: string;
  currency?: string;
}
export const emptyState = {
  currency: 'USD',
  deliver_date: '',
  destination_point_country: { id: '', title: '' },
  destination_point_region: { id: '', title: '' },
  pickup_date: '',
  pickup_point_country: { id: '', title: '' },
  pickup_point_region: { id: '', title: '' },
  price_from: '',
  price_to: '',
  weight: '',
};

const SearchLoads = () => {
  const searchLoadsRequest = useSearchLoads();
  const handleClick = (data: SearchLoadFilterType) => {
    const queryData = {
      ...data,
      pickup_point_country: data.pickup_point_country?.id,
      pickup_point_region: data.pickup_point_region?.id,
      destination_point_country: data.destination_point_country?.id,
      destination_point_region: data.destination_point_region?.id,
    };
    const query = qs.stringify(queryData);
    searchLoadsRequest.mutate(
      { query },
      {
        onSuccess(res) {
          console.log(res);
        },
      }
    );
  };
  useEffect(() => {
    searchLoadsRequest.mutate({ query: '' });
  }, []);

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
