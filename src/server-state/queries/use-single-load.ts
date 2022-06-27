import { useQuery } from 'react-query';
import { request } from '../api';

interface SingleLoadResponse {
  some_data: string;
}

export const useSingleLoad = ({
  id,
  type,
}: {
  id?: string;
  type?: 'new' | 'delivered' | 'on_the_way';
}) => {
  return useQuery([`${type}_load_${id}`], () =>
    request
      .get<{ list: SingleLoadResponse[] }>(`/load/${type}/${id}/detail/`)
      .then((res) => res.data)
  );
};
