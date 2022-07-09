import { useSnackbar } from 'notistack';
import { useMutation, useQueryClient } from 'react-query';
import { request } from '../api';

interface CreateAddressRequest {
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
export const useCreateAddress = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    (data: CreateAddressRequest) =>
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
export const useEditAddress = (id?: number) =>
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
export const useDeleteAddress = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { invalidateQueries } = useQueryClient();

  return useMutation(
    (data: DeleteAddressRequest) =>
      request
        .delete<{ success: boolean }>(`/region/address/${data.id}/delete/`)
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
