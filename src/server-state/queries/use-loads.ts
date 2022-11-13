/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDriver } from 'hooks/use-driver';
import { useInfiniteQuery, useQuery } from 'react-query';
import { SingleLoadResponse } from 'types/load.types';
import { request } from '../api';

export interface LoadsResponse {
  count: number;
  next: null | number;
  previous: null | number;
  results: SingleLoadResponse[];
}

const fetchLoads = async ({
  pageParam = 1,
  status = 1,
  url,
}: {
  pageParam?: number;
  status: 1 | 2 | 3;
  url: string;
}) => {
  const data = await request
    .get<LoadsResponse>(`${url}?status=${status}&page=${pageParam}&limit=6`)
    .then((res) => res.data);
  return {
    results: data.results,
    nextPage: pageParam + 1,
    totalPages: Math.ceil(Number(data?.count) / 6),
    count: data.count,
  };
};

export const useLoads = (type: 'new' | 'on_the_way' | 'delivered') => {
  const { isDriver } = useDriver();
  let status: 1 | 2 | 3;
  if (type === 'new') {
    status = 1;
  } else if (type === 'on_the_way') {
    status = 2;
  } else {
    status = 3;
  }

  // const url = isDriver ? '/driver/load/list/' : '/load/list/';
  const url = '/load/list/';

  return useInfiniteQuery(
    [`loads_${type}`],
    () => fetchLoads({ status, url }),
    {
      enabled: false,
      getNextPageParam(lastPage) {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    }
  );
};

export const useSearchLoads = (data: { query?: string }) => {
  const { isDriver } = useDriver();
  const url = isDriver ? `/driver/load/list/` : `/load/list/`;

  return useQuery(
    `loads ${data.query}`,
    () =>
      request
        .get<LoadsResponse>(`${url}?${data.query}`)
        .then((res) => res.data),
    {
      retry: false,
    }
  );
};
