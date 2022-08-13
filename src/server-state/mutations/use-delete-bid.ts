import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';
import { request } from '../api';

export const useDeleteBid = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    (data: { bid_id: number }) =>
      request
        .delete<{ success: boolean }>(`driver/bid/${data.bid_id}/delete/`)
        .then((res) => res.data),
    {
      onSuccess() {
        enqueueSnackbar('Bid deleted succesffuly', { variant: 'info' });
      },
      onError() {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      },
    }
  );
};
