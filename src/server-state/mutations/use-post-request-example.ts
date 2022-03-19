import { useMutation } from 'react-query';
import { request } from '../api';

interface SendingRequest {
  sending_data: string;
}

export const usePost = () =>
  useMutation(
    (data: SendingRequest) =>
      request
        .post<{ success: boolean }>('/dummy data/', data)
        .then((res) => res.data),
    {
      retry: false,
    }
  );
