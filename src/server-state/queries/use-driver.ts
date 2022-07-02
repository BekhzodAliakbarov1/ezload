import { useQuery } from 'react-query';
import { request } from '../api';

export interface SingleDriverResponse {
  profile_picture?: {
    file: string;
  };
  first_name: string;
  last_name: string;
  average_rate: number;
  vehicle?: {
    title: string;
    licence_plate: string;
    capacity: string;
  };
  routes?: {
    country: {
      title: string;
      language: string;
    };
    region: {
      title: string;
      language: string;
    };
  }[];
  reviews: {
    rate: number;
    feedback: string;
    reviewer: {
      profile_picture?: {
        file: string;
      };
      first_name: string;
    };
  }[];
}

export const useSingleDriver = (driver_id: string) =>
  useQuery(`driver_${driver_id}`, () =>
    request
      .get<SingleDriverResponse>(`/driver/${driver_id}/detail/`)
      .then((res) => res.data)
  );
