import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from 'react-query';
import { CreateProfileAddressRequestInterface } from 'types/address.types';
import { request } from '../api';

interface EditAddressRequest {
  country: number;
  region: number;
  district: number;
  location: {
    latitude: number;
    longitude: number;
  };
  orientation: string;
  postal_code: string;
}
interface DeleteAddressRequest {
  id?: number;
}

// CREATE
export const useCreateProfileAddress = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  return useMutation(
    (data: CreateProfileAddressRequestInterface) =>
      request
        .post<{ message: string; status_code: number }>(
          '/account/address/create/',
          data
        )
        .then((res) => res.data),
    {
      retry: false,
      onSuccess() {
        console.log(1221);

        enqueueSnackbar(t('Address created successfully!'), {
          variant: 'success',
        });
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError(e: any) {
        const errors = Object.entries(e.response?.data);
        errors.map((error) =>
          enqueueSnackbar(`${error} `, {
            variant: 'error',
          })
        );
      },
    }
  );
};

// EDIT
export const useEditProfileAddress = (id?: number) =>
  useMutation(
    (data: EditAddressRequest) =>
      request
        .put<{ success: boolean }>(`/account/address/${id}/update/`, data)
        .then((res) => res.data),
    {
      retry: false,
    }
  );

// DELETE
export const useDeleteProfileAddress = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { invalidateQueries } = useQueryClient();
  const { t } = useTranslation();

  return useMutation(
    (data: DeleteAddressRequest) =>
      request
        .delete<{ success: boolean }>(`/account/address/${data.id}/delete/`)
        .then((res) => res.data),
    {
      retry: false,
      onSuccess() {
        enqueueSnackbar(t('Address deleted successfully!'), {
          variant: 'success',
        });
        invalidateQueries(['address']);
      },
      onError() {
        enqueueSnackbar(t('Something went wrong!'), {
          variant: 'error',
        });
      },
    }
  );
};
