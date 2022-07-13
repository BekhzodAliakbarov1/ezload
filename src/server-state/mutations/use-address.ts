import { useMutation } from 'react-query';
import { request } from '../api';

interface CreateAddressRequest {
  country: number;
  region: number;
  district: number;
  location: {
    latitude?: number;
    longitude?: number;
  };
  orientation: string;
  postal_code: string;
  is_user_address: boolean;
}

// CREATE
export const useCreateAddress = () => {
  return useMutation(
    (data: CreateAddressRequest) =>
      request
        .post<{ message: string; status_code: number; id: number }>(
          '/address/create/',
          data
        )
        .then((res) => res.data),
    {
      retry: false,
    }
  );
};
