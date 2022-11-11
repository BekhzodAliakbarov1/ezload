import Button from 'components/button/button';
import LoadInfoCard from 'components/cards/load-info-card';
import LoadCard from 'components/cards/single-load/load-card';
import CancelBidModal from 'components/modals/cancel-bid-modal';
import MakeBidModal from 'components/modals/make-bid-modal';
import LoadSkeloton from 'components/skelotons/load-card';
import LoadInfoSkeloton from 'components/skelotons/load-info';
import Text from 'components/typography/text';
import { useDriver } from 'hooks/use-driver';
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
import { useEffect } from 'react';

const LoadInfoView = () => {
  const { load_id } = useParams<{
    load_id: string;
  }>();
  const { t } = useTranslation();
  const { isDriver } = useDriver();
  const { data, refetch } = useLoad({ load_id });
  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      <LoadInfoViewWrapper>
        <LoadInfowViewHeader>
          <Text weight="700">{t('Load Details')}</Text>
          {isDriver && data?.status === 1 && (
            <>
              {data.is_bidden ? (
                <CancelBidModal bid_id={data.bid_id} load_id={load_id}>
                  <Button aria-label="delete">{t('Delete bid')}</Button>
                </CancelBidModal>
              ) : (
                <MakeBidModal load_id={load_id} wanted_price={data.price}>
                  <Button aria-label="bid load">{t('Bid to the load')}</Button>
                </MakeBidModal>
              )}
            </>
          )}
        </LoadInfowViewHeader>
        <LoadInfoDataWrapperBox>
          {data ? (
            <LoadCard
              clickable={false}
              load={data}
              // withButtons
              status={data.status}
            />
          ) : (
            <LoadSkeloton />
          )}
          {data ? <LoadInfoCard data={data} /> : <LoadInfoSkeloton />}
        </LoadInfoDataWrapperBox>
        {isDriver ? <LoadCreator data={data} /> : <LoadBids data={data} />}
      </LoadInfoViewWrapper>
    </>
  );
};

export default LoadInfoView;
