import { useQuery } from 'react-query';
import { SingleLoadDetailsResponse } from 'types/load.types';
import { request } from '../api';

export const useLoad = ({ id }: { id?: string }) => {
  return useQuery([`load_${id}`], () =>
    request
      .get<SingleLoadDetailsResponse>(`/load/${id}/detail/`)
      .then((res) => res.data)
  );
};
