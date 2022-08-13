import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';
import { request } from '../api';

export const useDeliverLoad = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    (data: { load_id?: string }) =>
      request
        .put<{ success: boolean }>(`/driver/load/${data.load_id}/delivered/`)
        .then((res) => res.data),
    {
      onSuccess() {
        enqueueSnackbar('Load delivered succesffuly', { variant: 'info' });
      },
      onError() {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      },
    }
  );
};
