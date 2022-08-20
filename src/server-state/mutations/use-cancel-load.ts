import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from 'react-query';
import { request } from '../api';

export const useCancelLoad = ({ load_id }: { load_id?: string }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const qc = useQueryClient();

  return useMutation(
    (data: { customer_reason: number; comment: string }) =>
      request
        .put<{ success: boolean }>(`/driver/load/${load_id}/cancel/`, data)
        .then((res) => res.data),
    {
      onSuccess() {
        enqueueSnackbar(t('Load canceled successfully!'), { variant: 'info' });
        qc.invalidateQueries([`load_${load_id}`]);
      },
      onError() {
        enqueueSnackbar(t('Something went wrong!'), { variant: 'error' });
      },
    }
  );
};
