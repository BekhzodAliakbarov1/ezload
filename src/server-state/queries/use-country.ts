import usePaginatedQuery from 'hooks/use-paginated-query';

interface SearchCountryResponse {
  id: number;
  title: string;
  language: string;
}
interface SearchCountryFilters {
  page?: number;
  search?: string;
  limit?: number;
  token?: string;
}

export const useCountry = (filters?: SearchCountryFilters) =>
  usePaginatedQuery<SearchCountryResponse>(
    [`country`, filters],
    {
      path: '/area/country/list/',
      limit: 10,
      search: filters?.search,
    },
    filters?.token
  );
