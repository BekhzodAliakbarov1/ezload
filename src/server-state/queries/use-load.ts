import { useQuery } from 'react-query';
import { SingleLoadDetailsResponse } from 'types/load.types';
import { request } from '../api';

export const useLoad = ({ load_id }: { load_id?: string }) => {
  return useQuery(`load_${load_id}`, () =>
    request
      .get<SingleLoadDetailsResponse>(`/load/${load_id}/detail/`)
      .then((res) => res.data)
  );
};
