import { QueryKey, useInfiniteQuery } from 'react-query';

import qs from 'qs';
import { request } from '../server-state/api';
import { IListFilters, Paginated } from '../types/utility.types';

interface IDetails extends Omit<IListFilters, 'page'> {
  path: string;
}

// I stands for Item in a list and O for additional data
const usePaginatedQuery = <I, O = unknown>(
  queryKey: QueryKey,
  details: IDetails
) =>
  useInfiniteQuery(
    queryKey,
    async ({ pageParam = 1 }) => {
      const data = await request
        .get<Paginated<I> & O>(
          details.path +
            qs.stringify(
              {
                country: details.country,
                region: details.region,
                page: pageParam,
                limit: details.limit ?? 10,
                search: details.search,
              },
              { addQueryPrefix: true }
            )
        )
        .then((res) => res.data);
      return {
        ...data,
        nextPage: pageParam + 1,
        totalPages: Math.ceil(Number(data.count) / (details?.limit ?? 10)),
      };
    },
    {
      getNextPageParam(lastPage) {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
      enabled: false,
    }
  );

export default usePaginatedQuery;
