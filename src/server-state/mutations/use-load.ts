import { useSnackbar } from 'notistack';
import { useMutation, useQueryClient } from 'react-query';
import { request } from '../api';

interface CreateLoadRequest {
  pickup_point: {
    country: number;
    region: number;
    district: number;
    location: {
      latitude: number;
      longitude: number;
    };
    orientation: string;
    postal_code: string;
    is_user_address: boolean;
  };
  destination: {
    country: number;
    region: number;
    district: number;
    location: {
      latitude: number;
      longitude: number;
    };
    orientation: string;
    postal_code: string;
    is_user_address: boolean;
  };
  title: string;
  description: string;
  earliest_pick_up: string | Date;
  latest_pick_up: string | Date;
  earliest_delivery: string | Date;
  latest_delivery: string | Date;
  price: string;
  weight: number;
}
// interface EditAddressRequest {
//   id: string;

//   region?: number;
//   district?: number;
//   latitude?: string;
//   longitude?: string;
//   orientation?: string;
// }
interface DeleteLoadRequest {
  id: string;
}

// CREATE
export const useCreateLoad = () =>
  useMutation(
    (data: CreateLoadRequest) =>
      request
        .post<{ success: boolean }>('/load/create/', data)
        .then((res) => res.data),
    {
      retry: false,
    }
  );

// EDIT
// export const useEditAddress = () =>
//   useMutation(
//     (data: EditAddressRequest) =>
//       request
//         .put<{ success: boolean }>(`/region/address/${data.id}/update/`, data)
//         .then((res) => res.data),
//     {
//       retry: false,
//     }
//   );

// DELETE
export const useDeleteLoad = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { invalidateQueries } = useQueryClient();

  return useMutation(
    (data: DeleteLoadRequest) =>
      request
        .delete<{ success: boolean }>(`/load/${data.id}/delete/`)
        .then((res) => res.data),
    {
      retry: false,
      onSuccess() {
        enqueueSnackbar('Load deleted succesffuly!', {
          variant: 'success',
        });
        invalidateQueries(['loads']);
      },
      onError() {
        enqueueSnackbar('Something went wrong!', {
          variant: 'error',
        });
      },
    }
  );
};
