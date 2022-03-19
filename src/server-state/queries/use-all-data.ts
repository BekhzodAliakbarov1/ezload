// this file is for getting only data with pagination
import { useInfiniteQuery } from 'react-query';
import { request } from '../api';

// This is interface for commeing date it shoould be in types  folder for the best case
interface ExampleResponse {
  count: number;
  results: object[];
}

const fetchSomeExampleData = async ({ pageParam = 1 }) => {
  const data = await request
    .get<ExampleResponse>(`/someurl/${pageParam}`)
    .then((res) => res.data);
  return {
    results: data.results,
    nextPage: pageParam + 1,
    totalPages: Math.ceil(Number(data?.count) / 10),
  };
};

export const useExampleData = () =>
  useInfiniteQuery('unique name for this api', fetchSomeExampleData, {
    getNextPageParam(lastPage) {
      if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    },
  });
