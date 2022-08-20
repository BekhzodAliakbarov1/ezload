import { useAuth } from 'global-state/auth/auth.state';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from 'react-query';
import { request } from '../api';

interface DeleteRouteRequest {
  route_id: number;
}

export const useDeleteRoute = (token?: string) => {
  const { enqueueSnackbar } = useSnackbar();
  const qc = useQueryClient();
  const { t } = useTranslation();
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
        enqueueSnackbar(t('Route deleted successfully!'), { variant: 'info' });
        qc.invalidateQueries([`routes`]);
      },
      onError() {
        enqueueSnackbar(t('Something went wrong!'), { variant: 'error' });
      },
    }
  );
};
