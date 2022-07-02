import { useSnackbar } from 'notistack';
import { useQuery } from 'react-query';
import { request } from '../api';

interface AcceptBidResponse {
  message: string;
  status_code: number;
}

export const useAcceptBid = ({ bid_id }: { bid_id?: string }) => {
  const { enqueueSnackbar } = useSnackbar();

  return useQuery(
    `accept_${bid_id}`,
    () =>
      request
        .get<AcceptBidResponse>(`/load/bid/${bid_id}/accept/`)
        .then((res) => res.data),
    {
      enabled: false,
      onSuccess() {
        enqueueSnackbar('Bid accepted succesfully!', { variant: 'success' });
      },
      onError(err) {
        enqueueSnackbar('Something went wrong!', { variant: 'error' });
        console.log('ERROR', err);
      },
    }
  );
};
