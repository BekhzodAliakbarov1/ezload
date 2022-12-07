import { useAuth } from 'global-state/auth/auth.state';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { request } from '../api';

interface UpdateVehicleRequest {
  title?: string;
  licence_plate?: string;
  capacity?: number;
}

export const useUpdateVehicle = () => {
  const { userId } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  return useMutation(
    (data: UpdateVehicleRequest) => {
      return request
        .put<{ success: boolean }>(`/driver/vehicle/${userId}/update/`, data)
        .then((res) => res.data);
    },
    {
      retry: false,
      onSuccess() {
        enqueueSnackbar(t('Vehicle updated successfully!'), {
          variant: 'success',
        });
      },
      onError(err) {
        enqueueSnackbar(t('Something went wrong!'), { variant: 'error' });
      },
    }
  );
};
