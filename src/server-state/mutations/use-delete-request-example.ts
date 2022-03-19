import { useMutation } from 'react-query';
import { request } from '../api';

interface SendingRequest {
  sending_data: string;
}

export const useDelete = () =>
  useMutation((data: SendingRequest) =>
    request
      .delete<{ success: boolean }>(`/${data.sending_data}/`)
      .then((res) => res.data)
  );
