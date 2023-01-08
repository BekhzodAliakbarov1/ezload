import { useMutation, useQueryClient } from 'react-query';
import { request } from '../api';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

interface CreateBidRequest {
  price: string;
  currency: string;
}

export const useCreateBid = ({ load_id }: { load_id?: string }) => {
  const { enqueueSnackbar } = useSnackbar();
  const qc = useQueryClient();
  const { t } = useTranslation();

  return useMutation(
    (data: CreateBidRequest) =>
      request
        .post<{ success: boolean }>('/driver/bid/create/', {
          load: load_id,
          price: data.price,
          currency: data.currency,
        })
        .then((res) => res.data),
    {
      retry: false,
      onSuccess() {
        enqueueSnackbar(t('Bidded successfully!'), { variant: 'success' });
        qc.invalidateQueries([`load_${load_id}`]);
      },
      onError() {
        enqueueSnackbar(t('Something went wrong!'), { variant: 'error' });
      },
    }
  );
};
