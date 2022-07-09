import Text from 'components/typography/text';
import React from 'react';
import { useLocation, useParams } from 'react-router';
import { useSingleDriver } from 'server-state/queries/use-driver';
import { DriverInfoBox, DriverInfoWrapper } from './driver-info.styles';
import DriverMainInfos from './driver-main-infos';
import { DriverReviews } from './driver-reviews';

interface BidProps {
  state: {
    id?: string;
    price?: string;
  };
}

const DriverInfo = () => {
  const { id = '0' } = useParams<{ id: string }>();
  const { data } = useSingleDriver(id);
  const { state } = useLocation() as BidProps;

  return (
    <DriverInfoWrapper>
      <Text weight="700">Driver details</Text>
      <DriverInfoBox>
        <DriverMainInfos
          data={data}
          bid_id={state.id}
          bidded_price={state.price}
        />
        <DriverReviews data={data} />
      </DriverInfoBox>
    </DriverInfoWrapper>
  );
};

export default DriverInfo;
