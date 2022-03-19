import { useQuery } from 'react-query';
import { request } from '../api';

interface CommingData {
  some_data: string;
}

export const useSimpleData = () =>
  useQuery('unique name', () =>
    request.get<{ list: CommingData[] }>('/dummy data/').then((res) => res.data)
  );
