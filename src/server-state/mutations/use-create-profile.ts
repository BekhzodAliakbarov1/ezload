import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { request } from '../api';

interface CreateDriverProfileRequestRequest {
  user: {
    first_name: string;
    last_name: string;
    profile_picture: number;
  };
  vehicle: {
    title: string;
    licence_plate: string;
    capacity: string;
  };
  routes?: {
    country: number;
    region: number;
  }[];
  token: string;
}

export const useCreateDriverProfile = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  return useMutation(
    (data: CreateDriverProfileRequestRequest) => {
      return request
        .post<{ success: boolean }>(`/driver/create/`, data, {
          headers: {
            Authorization: `Token ${data.token}`,
          },
        })
        .then((res) => res.data);
    },
    {
      retry: false,
      onSuccess() {
        enqueueSnackbar(t('Account Created successfully!'), {
          variant: 'success',
        });
      },
      onError(err) {
        enqueueSnackbar(t('Something went wrong!'), { variant: 'error' });
        console.log('ERROR', err);
      },
    }
  );
};
