import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';
import { request } from '../api';

interface DeleteRouteRequest {
  route_id: string;
}

export const useDeleteRoute = () => {
  const { enqueueSnackbar } = useSnackbar();
  return useMutation(
    (data: DeleteRouteRequest) =>
      request
        .delete<{ success: boolean }>(`/driver/route/${data.route_id}/delete/`)
        .then((res) => res.data),
    {
      onSuccess() {
        enqueueSnackbar('Route deleted succesffuly', { variant: 'info' });
      },
      onError() {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      },
    }
  );
};
