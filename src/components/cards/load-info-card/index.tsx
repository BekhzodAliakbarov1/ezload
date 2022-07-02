import Button from 'components/button/button';
import Text from 'components/typography/text';
import React from 'react';
import { SingleLoadDetailsResponse } from 'types/load.types';
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
  data: SingleLoadDetailsResponse;
}> = ({ loadType, data }) => {
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
          <Text color="main_100">{data.weight} tonnes</Text>
        </LoadInfoCardDataSingleBox>
        <LoadInfoCardDataSingleBox>
          <Text>Payment</Text>
          <Text color="main_100">{data.price} USD</Text>
        </LoadInfoCardDataSingleBox>
      </LoadInfoCardDataBox>
      <LoadDescriptionWrapper>
        <Text>Description</Text>
        <Text color="main_100">{data.description}</Text>
      </LoadDescriptionWrapper>
      <LoadBidAndViewCountWrapper>
        <LoadBidAndViewBox>
          <Text>Bid Count</Text>
          <Text color="main_100">{data.bids_count}</Text>
        </LoadBidAndViewBox>
        <LoadBidAndViewBox>
          <Text>Seen Count</Text>
          <Text color="main_100">{data.visits_count}</Text>
        </LoadBidAndViewBox>
      </LoadBidAndViewCountWrapper>
    </LoadInfoCradWrapper>
  );
};

export default LoadInfoCard;
