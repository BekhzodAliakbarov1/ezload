import { useSnackbar } from 'notistack';
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
  id: string;
}

// CREATE
export const useCreateProfileAddress = () => {
  const { enqueueSnackbar } = useSnackbar();

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
        enqueueSnackbar('Address created succesfully!', { variant: 'success' });
      },
      onError() {
        enqueueSnackbar('Something went wrong!', { variant: 'error' });
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

  return useMutation(
    (data: DeleteAddressRequest) =>
      request
        .delete<{ success: boolean }>(`/account/address/${data.id}/delete/`)
        .then((res) => res.data),
    {
      retry: false,
      onSuccess() {
        enqueueSnackbar('Address deleted succesffuly!', {
          variant: 'success',
        });
        invalidateQueries(['address']);
      },
      onError() {
        enqueueSnackbar('Something went wrong!', {
          variant: 'error',
        });
      },
    }
  );
};