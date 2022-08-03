import { useAuth } from 'global-state/auth/auth.state';
import { useSnackbar } from 'notistack';
import { useMutation, useQueryClient } from 'react-query';
import { request } from '../api';

interface DeleteRouteRequest {
  route_id: number;
}

export const useDeleteRoute = (token?: string) => {
  const { enqueueSnackbar } = useSnackbar();

  const {
    tokens: { access },
  } = useAuth();
  const accessToken = token ?? access;

  return useMutation(
    (data: DeleteRouteRequest) =>
      request
        .delete<{ success: boolean }>(
          `/driver/route/${data.route_id}/delete/`,
          {
            headers: {
              Authorization: `Token ${accessToken}`,
            },
          }
        )
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
