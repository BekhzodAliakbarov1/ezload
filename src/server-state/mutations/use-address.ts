import { useSnackbar } from 'notistack';
import { useMutation, useQueryClient } from 'react-query';
import { request } from '../api';

interface CreateAddressRequest {
  region: number;
  district: number;
  latitude: string;
  longitude: string;
  orientation: string;
}
interface EditAddressRequest {
  id: string;

  region?: number;
  district?: number;
  latitude?: string;
  longitude?: string;
  orientation?: string;
}
interface DeleteAddressRequest {
  id: string;
}

// CREATE
export const useCreateAddress = () =>
  useMutation(
    (data: CreateAddressRequest) =>
      request
        .post<{ success: boolean }>('/region/address/create/', data)
        .then((res) => res.data),
    {
      retry: false,
    }
  );

// EDIT
export const useEditAddress = () =>
  useMutation(
    (data: EditAddressRequest) =>
      request
        .put<{ success: boolean }>(`/region/address/${data.id}/update/`, data)
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
