import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { request } from '../api';

export const useDeliverLoad = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  return useMutation(
    (data: { load_id?: string }) =>
      request
        .put<{ success: boolean }>(`/driver/load/${data.load_id}/delivered/`)
        .then((res) => res.data),
    {
      onSuccess() {
        enqueueSnackbar(t('Load delivered successfully!'), { variant: 'info' });
      },
      onError() {
        enqueueSnackbar(t('Something went wrong!'), { variant: 'error' });
      },
    }
  );
};
