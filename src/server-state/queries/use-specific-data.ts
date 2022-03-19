// this file is getting data for specific info may be with user id or smth
import { useInfiniteQuery } from 'react-query';
import { request } from '../api';

// This is sending request interface
interface ExampleRequest {
  specific_data: string;
}

// This is interface for commeing date it shoould be in types  folder for the best case
interface ExampleResponse {
  count: number;
  results: object[];
}

export const useSpecificExampleDatas = (props: ExampleRequest) =>
  useInfiniteQuery(
    `unique data ${props.specific_data}`,
    async ({ pageParam = 1 }) => {
      const data = await request
        .get<ExampleResponse>(`/users/${props.specific_data}/dummy data`)
        .then((res) => res.data);

      return {
        results: data.results,
        nextPage: pageParam + 1,
        totalPages: Math.ceil(Number(data?.count) / 3),
      };
    },
    {
      getNextPageParam(lastPage) {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    }
  );
