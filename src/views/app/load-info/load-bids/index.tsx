import DriverCard from 'components/cards/driver-card';
import Text from 'components/typography/text';
import React from 'react';
import {
  LoadBidDriverCard,
  LoadBidDriverCostWrapper,
  LoadBidsDataBox,
  LoadBidsWrapper,
  NoLoadBodsWrapper,
} from './load-bids.styles';
import Button from 'components/button/button';
import DollarIcon from 'components/icons/dollar.icon';
import { SingleLoadDetailsResponse } from 'types/load.types';
import { useNavigate, useParams } from 'react-router-dom';
import FileIcon from 'components/icons/file.icon';
import { useTranslation } from 'react-i18next';
import ReviewDriverModal from 'components/modals/review-driver-modal';
import CancelDriverModal from 'components/modals/cancel-driver-bid-modal';
import DeletLoadModal from 'components/modals/delete-load-modal';
import BiddedDriversSkeleton from 'components/skelotons/bidded-drivers-part';
import { moneyFormatter } from 'utils/money-formatter';

const LoadBids: React.FC<{
  data?: SingleLoadDetailsResponse;
}> = ({ data }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { load_id } = useParams<{ load_id: string }>();

  return (
    <>
      {data ? (
        <LoadBidsWrapper>
          <Text weight="700">
            {data.status === 1 ? t('Bids') : t('Driver')}
          </Text>

          {data.status === 1 ? (
            <LoadBidsDataBox>
              {data.bids && data.bids.length > 0 ? (
                data.bids.map((bid) => (
                  <LoadBidDriverCard key={bid.id}>
                    <div
                      onClick={() => navigate(`/load-bidded-driver/${bid.id}`)}
                    >
                      <DriverCard
                        first_name={bid.owner.first_name}
                        rates_avg={bid.owner.average_rate}
                        image={bid.owner.profile_picture?.file}
                        vehicle={bid.owner.vehicle}
                        shadow
                        sizes="104px"
                        clickable
                        // bg_color={colors.green_5}
                      />
                    </div>
                    <LoadBidDriverCostWrapper>
                      <DollarIcon />
                      <Text weight="600">
                        {moneyFormatter({
                          currency: bid.currency ?? 'UZS',
                          number: bid.price,
                        })}
                      </Text>
                    </LoadBidDriverCostWrapper>
                  </LoadBidDriverCard>
                ))
              ) : (
                <NoLoadBodsWrapper>
                  <FileIcon size="100" />
                  <Text>{t('No bids yet')}</Text>
                </NoLoadBodsWrapper>
              )}
            </LoadBidsDataBox>
          ) : (
            <LoadBidsDataBox
              onClick={() => navigate(`/drivers/${data.driver?.id}`)}
            >
              <DriverCard
                shadow
                clickable
                sizes="104px"
                first_name={data?.driver?.first_name ?? ''}
                id={3}
                rates_avg={data?.driver?.average_rate ?? 3}
                image={data?.driver?.profile_picture?.file}
                loads_count={data?.driver?.loads_count}
              />
            </LoadBidsDataBox>
          )}
          {data.status === 1 && (
            <DeletLoadModal load_id={Number(load_id)}>
              <Button fullWidth style={{ maxWidth: '300px' }}>
                {t('Delete load')}
              </Button>
            </DeletLoadModal>
          )}

          {data.status === 2 && (
            <CancelDriverModal
              accepted_bid={data.accepted_bid}
              driver_name={data.driver?.first_name}
              load_id={load_id}
            >
              <Button fullWidth style={{ maxWidth: '300px' }}>
                {t('Cancel the driver')}
              </Button>
            </CancelDriverModal>
          )}

          {data.status === 3 && (
            <ReviewDriverModal
              load_id={Number(load_id)}
              reviewee_id={data.driver?.id}
            >
              <Button>{t('Review the driver')}</Button>
            </ReviewDriverModal>
          )}
        </LoadBidsWrapper>
      ) : (
        <BiddedDriversSkeleton />
      )}
    </>
  );
};

export default LoadBids;
