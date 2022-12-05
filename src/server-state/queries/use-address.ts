// this file is for getting only data with pagination
import { useInfiniteQuery } from 'react-query';
import { AddressInterface } from 'types/address.types';
import { request } from '../api';

// This is interface for commeing date it shoould be in types  folder for the best case
interface AddressResponse {
  count: number;
  next: null | number;
  previous: null | number;
  results: AddressInterface[];
}

const fetchAddress = async ({ pageParam = 1 }) => {
  const data = await request
    .get<AddressResponse>(`/account/address/list/`)
    // .get<AddressResponse>(`/account/address/list/&page=${pageParam}&limit=10`)
    .then((res) => res.data);
  return {
    results: data.results,
    nextPage: pageParam + 1,
    totalPages: Math.ceil(Number(data?.count) / 10),
  };
};

export const useAddress = () =>
  useInfiniteQuery(
    `address ${localStorage.getItem('language')}`,
    fetchAddress,
    {
      getNextPageParam(lastPage) {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    }
  );
