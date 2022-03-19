/* eslint-disable camelcase */
import { IListFilters } from 'types/utility.types';
import usePaginatedQuery from 'hooks/use-paginated-query';

// comming dtaa interface move it to types folder
interface ISearchData {
  commingData: string;
}

export const useInputSearch = (filters?: IListFilters) =>
  usePaginatedQuery<ISearchData>(['searchData', filters], {
    path: '/data-search/',
    limit: 10,
    search: filters?.search,
  });
