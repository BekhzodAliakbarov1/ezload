/* eslint-disable react-hooks/exhaustive-deps */
import Text from 'components/typography/text';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { useBidDetail } from 'server-state/queries/use-bid';
import { useSingleDriver } from 'server-state/queries/use-driver';
import { DriverInfoBox, DriverInfoWrapper } from './driver-info.styles';
import DriverMainInfos from './driver-main-infos';
import { DriverReviews } from './driver-reviews';

const DriverInfo = () => {
  const { id, bid_id } = useParams<{ id?: string; bid_id?: string }>();
  const driverRequest = useSingleDriver(id);
  const biddedDriverRequest = useBidDetail(bid_id);
  const { t } = useTranslation();

  useEffect(() => {
    if (id) {
      driverRequest.refetch();
    } else if (bid_id) {
      biddedDriverRequest.refetch();
    }
  }, [bid_id, id, localStorage.getItem('language')]);

  return (
    <DriverInfoWrapper>
      <Text weight="700">{t('Driver details')}</Text>
      <DriverInfoBox>
        {id && (
          <>
            <DriverMainInfos data={driverRequest.data} />
            <DriverReviews data={driverRequest.data} />
          </>
        )}
        {bid_id && (
          <>
            <DriverMainInfos
              data={biddedDriverRequest.data?.owner}
              bid_id={bid_id}
              bidded_price={biddedDriverRequest.data?.price}
              currency={biddedDriverRequest.data?.currecy}
              bidded_load_Id={biddedDriverRequest.data?.load_id}
            />
            <DriverReviews data={biddedDriverRequest.data?.owner} />
          </>
        )}
      </DriverInfoBox>
    </DriverInfoWrapper>
  );
};

export default DriverInfo;
