import Text from 'components/typography/text';
import React from 'react';
import { useParams } from 'react-router';
import { useSingleDriver } from 'server-state/queries/use-driver';
import { DriverInfoBox, DriverInfoWrapper } from './driver-info.styles';
import DriverMainInfos from './driver-main-infos';
import { DriverReviews } from './driver-reviews';

const DriverInfo = () => {
  const { id = '0', bidId } = useParams<{ id: string; bidId?: string }>();
  const { data } = useSingleDriver(id);
  console.log(bidId);

  return (
    <DriverInfoWrapper>
      <Text weight="700">Driver details</Text>
      <DriverInfoBox>
        <DriverMainInfos data={data} />
        <DriverReviews data={data} />
      </DriverInfoBox>
    </DriverInfoWrapper>
  );
};

export default DriverInfo;
