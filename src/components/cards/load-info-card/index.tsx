import Button from 'components/button/button';
import Text from 'components/typography/text';
import React from 'react';
import {
  LoadBidAndViewBox,
  LoadBidAndViewCountWrapper,
  LoadDescriptionWrapper,
  LoadInfoCardDataBox,
  LoadInfoCardDataSingleBox,
  LoadInfoCradWrapper,
} from './load-info-card.styles';

const LoadInfoCard: React.FC<{
  loadType: 'NEW' | 'BIDDED' | 'ON_THE_WAY';
}> = ({ loadType }) => {
  return (
    <LoadInfoCradWrapper>
      <Text weight="600">Information about load</Text>
      <Button buttonType="warning">
        {loadType === 'NEW' || loadType === 'BIDDED'
          ? 'NEW'
          : loadType === 'ON_THE_WAY' && 'ON THE WAY'}
      </Button>
      <LoadInfoCardDataBox>
        <LoadInfoCardDataSingleBox>
          <Text>Load owner</Text>
          <Text color="main_100">Abdukarim Abdusalomov</Text>
        </LoadInfoCardDataSingleBox>
        <LoadInfoCardDataSingleBox>
          <Text>Load Weight</Text>
          <Text color="main_100">21 tonnes</Text>
        </LoadInfoCardDataSingleBox>
        <LoadInfoCardDataSingleBox>
          <Text>Payment</Text>
          <Text color="main_100">3 000 000 sum</Text>
        </LoadInfoCardDataSingleBox>
      </LoadInfoCardDataBox>
      <LoadDescriptionWrapper>
        <Text>Description</Text>
        <Text color="main_100">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </LoadDescriptionWrapper>
      <LoadBidAndViewCountWrapper>
        <LoadBidAndViewBox>
          <Text>Bid Count</Text>
          <Text color="main_100">213</Text>
        </LoadBidAndViewBox>
        <LoadBidAndViewBox>
          <Text>Seen Count</Text>
          <Text color="main_100">431</Text>
        </LoadBidAndViewBox>
      </LoadBidAndViewCountWrapper>
    </LoadInfoCradWrapper>
  );
};

export default LoadInfoCard;
