import { useDriver } from 'hooks/use-driver';
import { useQuery } from 'react-query';
import { SingleLoadDetailsResponse } from 'types/load.types';
import { request } from '../api';

export const useLoad = ({ load_id }: { load_id?: string }) => {
  const { isDriver } = useDriver();

  const url = isDriver
    ? `/driver/load/${load_id}/detail/`
    : `/load/${load_id}/detail/`;
  return useQuery(`load_${load_id}`, () =>
    request.get<SingleLoadDetailsResponse>(url).then((res) => res.data)
  );
};
