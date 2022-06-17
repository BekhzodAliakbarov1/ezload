import Text from 'components/typography/text';
import React from 'react';
import { DriverInfoBox, DriverInfoWrapper } from './driver-info.styles';
import DriverMainInfos from './driver-main-infos';
import { DriverReviews } from './driver-reviews';

const DriverInfo = () => {
  return (
    <DriverInfoWrapper>
      <Text weight="700">Driver details</Text>
      <DriverInfoBox>
        <DriverMainInfos />
        <DriverReviews />
      </DriverInfoBox>
    </DriverInfoWrapper>
  );
};

export default DriverInfo;
