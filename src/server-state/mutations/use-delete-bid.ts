import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from 'react-query';
import { request } from '../api';

export const useDeleteBid = ({ load_id }: { load_id?: string }) => {
  const { enqueueSnackbar } = useSnackbar();
  const qc = useQueryClient();
  const { t } = useTranslation();

  return useMutation(
    (data: { bid_id?: number }) =>
      request
        .delete<{ success: boolean }>(`driver/bid/${data.bid_id}/delete/`)
        .then((res) => res.data),
    {
      onSuccess() {
        enqueueSnackbar(t('Bid deleted successfully!'), { variant: 'info' });
        qc.invalidateQueries([`load_${load_id}`]);
      },
      onError() {
        enqueueSnackbar(t('Something went wrong!'), { variant: 'error' });
      },
    }
  );
};
