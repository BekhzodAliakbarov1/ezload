import { Modal } from '@mui/material';
import Button from 'components/button/button';
import LoadInfoCard from 'components/cards/load-info-card';
import LoadCard from 'components/cards/single-load/load-card';
import BidIcon from 'components/icons/bid.icon';
import Input from 'components/input/input';
import MakeBidModal from 'components/modals/make-bid-modal';
import Text from 'components/typography/text';
import { useDriver } from 'hooks/use-driver';
import { useModal } from 'hooks/use-modal';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useCreateBid } from 'server-state/mutations/use-create-bid';
import { useDeleteBid } from 'server-state/mutations/use-delete-bid';
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
  const deleteBidRequest = useDeleteBid({ load_id });

  const deleteBidClickHandler = () => {
    deleteBidRequest.mutate({
      bid_id: singleLoadRequest.data?.bid_id,
    });
  };

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
                    <Button aria-label="delete" onClick={deleteBidClickHandler}>
                      {t('Delete bid')}
                    </Button>
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
