import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { request } from '../api';
import { useLoads } from './use-loads';

interface AcceptBidResponse {
  message: string;
  status_code: number;
}

export const useAcceptBid = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  return useMutation(
    ({ bid_id }: { bid_id?: string }) =>
      request
        .get<AcceptBidResponse>(`/load/bid/${bid_id}/accept/`)
        .then((res) => res.data),
    {
      onSuccess() {
        enqueueSnackbar(t('Bid accepted successfully!'), {
          variant: 'success',
        });
      },
      onError(err) {
        enqueueSnackbar(t('Something went wrong!'), { variant: 'error' });
      },
    }
  );
};

export const useCancelBid = ({ load_id }: { load_id?: string }) => {
  const qc = useQueryClient();
  const { refetch } = useLoads('on_the_way');

  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    ({ bid_id }: { bid_id?: number }) =>
      request
        .get<{ message: string; status_code: number; id: number }>(
          `/load/bid/${bid_id}/cancel/`
        )
        .then((res) => res.data),

    {
      onSuccess() {
        enqueueSnackbar(t('Bid canceled successfully!'), { variant: 'info' });
        refetch();
        qc.invalidateQueries([`load_${load_id}`]);
      },
      onError() {
        enqueueSnackbar(t('Something went wrong!'), { variant: 'error' });
      },
    }
  );
};

interface SingleBidDetail {
  owner: {
    profile_picture: {
      file: string;
    };
    first_name: string;
    phone_number: string;
    vehicle: {
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
  };
  price: number;
}

export const useBidDetail = (bid_id?: string) =>
  useQuery(
    `bid_${bid_id}`,
    () =>
      request
        .get<SingleBidDetail>(`/load/bid/${bid_id}/detail/`)
        .then((res) => res.data),
    {
      enabled: false,
    }
  );
