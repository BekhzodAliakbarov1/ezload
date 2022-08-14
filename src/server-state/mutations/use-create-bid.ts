import { useMutation, useQueryClient } from 'react-query';
import { request } from '../api';
import { useSnackbar } from 'notistack';

interface CreateBidRequest {
  load?: string;
  price: string;
}

export const useCreateBid = ({ load_id }: { load_id?: string }) => {
  const { enqueueSnackbar } = useSnackbar();
  const qc = useQueryClient();

  return useMutation(
    (data: CreateBidRequest) =>
      request
        .post<{ success: boolean }>('/driver/bid/create/', data)
        .then((res) => res.data),
    {
      retry: false,
      onSuccess() {
        enqueueSnackbar('Bidded successfully!', { variant: 'success' });
        qc.invalidateQueries([`load_${load_id}`]);
      },
      onError() {
        enqueueSnackbar('Something went wrong!', { variant: 'error' });
      },
    }
  );
};
