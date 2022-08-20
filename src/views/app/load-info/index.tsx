import Button from 'components/button/button';
import LoadInfoCard from 'components/cards/load-info-card';
import LoadCard from 'components/cards/single-load/load-card';
import BidIcon from 'components/icons/bid.icon';
import CancelBidModal from 'components/modals/cancel-bid-modal';
import MakeBidModal from 'components/modals/make-bid-modal';
import Text from 'components/typography/text';
import { useDriver } from 'hooks/use-driver';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useLoad } from 'server-state/queries/use-load';
import LoadBids from './load-bids';
import LoadCreator from './load-creator';
import {
  LoadInfoDataWrapperBox,
  LoadInfoViewWrapper,
  LoadInfowViewHeader,
} from './load-info.styles';

const LoadInfoView = () => {
  const { load_id } = useParams<{
    load_id: string;
  }>();
  const { t } = useTranslation();
  const { isDriver } = useDriver();
  const singleLoadRequest = useLoad({ load_id });

  return (
    <>
      <LoadInfoViewWrapper>
        <LoadInfowViewHeader>
          <Text weight="700">{t('Load Details')}</Text>
          {isDriver && (
            <>
              {singleLoadRequest.data?.status === 1 ? (
                <>
                  {singleLoadRequest.data.is_bidden ? (
                    <CancelBidModal
                      bid_id={singleLoadRequest.data.bid_id}
                      load_id={load_id}
                    >
                      <Button aria-label="delete">{t('Delete bid')}</Button>
                    </CancelBidModal>
                  ) : (
                    <MakeBidModal
                      load_id={load_id}
                      wanted_price={singleLoadRequest.data.price}
                    >
                      <Button aria-label="bid load">
                        {t('Bid to the load')}
                      </Button>
                    </MakeBidModal>
                  )}
                </>
              ) : (
                singleLoadRequest.data?.status === 2 && (
                  <Button
                    aria-label="bidded"
                    startIcon={<BidIcon />}
                    variant="outlined"
                    disabled
                    buttonType="disabled"
                  >
                    {t('Bid to the load')}
                  </Button>
                )
              )}
            </>
          )}
        </LoadInfowViewHeader>
        <LoadInfoDataWrapperBox>
          {singleLoadRequest.data && (
            <LoadCard
              clickable={false}
              load={singleLoadRequest.data}
              // withButtons
              status={singleLoadRequest.data.status}
            />
          )}
          {singleLoadRequest.data && (
            <LoadInfoCard data={singleLoadRequest.data} />
          )}
        </LoadInfoDataWrapperBox>
        {isDriver ? (
          <LoadCreator data={singleLoadRequest.data} />
        ) : (
          <LoadBids data={singleLoadRequest.data} />
        )}
      </LoadInfoViewWrapper>
    </>
  );
};

export default LoadInfoView;
