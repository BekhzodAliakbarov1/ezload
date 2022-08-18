import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { request } from '../api';
import { useLoad } from './use-load';

interface AcceptBidResponse {
  message: string;
  status_code: number;
}

export const useAcceptBid = ({ bid_id }: { bid_id?: string }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  return useQuery(
    `accept_${bid_id}`,
    () =>
      request
        .get<AcceptBidResponse>(`/load/bid/${bid_id}/accept/`)
        .then((res) => res.data),
    {
      enabled: false,
      onSuccess() {
        enqueueSnackbar(t('Bid accepted successfully!'), {
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

export const useCancelBid = ({
  bid_id,
  load_id,
}: {
  bid_id?: number;
  load_id?: string;
}) => {
  const { refetch } = useLoad({ load_id });
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  return useQuery(
    `cancel_${bid_id}`,
    () =>
      request
        .get<AcceptBidResponse>(`/load/bid/${bid_id}/cancel/`)
        .then((res) => res.data),
    {
      enabled: false,
      onSuccess() {
        refetch();
        enqueueSnackbar(t('Bid canceled successfully!'), { variant: 'info' });
      },
      onError(err) {
        enqueueSnackbar(t('Something went wrong!'), { variant: 'error' });
        console.log('ERROR', err);
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
