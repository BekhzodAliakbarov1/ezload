import { useMutation } from 'react-query';
import { request } from '../api';
import { useSnackbar } from 'notistack';

interface CreateBidRequest {
  load?: string;
  price: string;
}

export const useCreateBid = () => {
  const { enqueueSnackbar } = useSnackbar();
  return useMutation(
    (data: CreateBidRequest) =>
      request
        .post<{ success: boolean }>('/driver/bid/create/', data)
        .then((res) => res.data),
    {
      retry: false,
      onSuccess() {
        enqueueSnackbar('Bidded successfully!', { variant: 'success' });
      },
      onError() {
        enqueueSnackbar('Something went wrong!', { variant: 'error' });
      },
    }
  );
};
