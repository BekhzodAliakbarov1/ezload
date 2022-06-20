import Button from 'components/button/button';
import LoadInfoCard from 'components/cards/load-info-card';
import LoadCard from 'components/cards/single-load/load-card';
import BidIcon from 'components/icons/bid.icon';
import Text from 'components/typography/text';
import { useDriver } from 'hooks/use-driver';
import React, { useState } from 'react';
import LoadCreator from './load-creator';
import {
  LoadInfoDataWrapperBox,
  LoadInfoViewWrapper,
  LoadInfowViewHeader,
} from './load-info.styles';

const date = new Date();

const data = {
  id: 1,
  pickup_address: 'Asaka city, Andijan region',
  pickup_country: 'Uzbekistan',
  pickup_date: date.toUTCString(),
  deliver_address: 'Tashkent city, Andijan region',
  deliver_country: 'Uzbekistan',
  deliver_date: date.toUTCString(),
  distance: '894 km',
  bid_count: '232',
  view_count: 2332,
};
const LoadInfoView = () => {
  const [loadType, setLoadType] = useState<'NEW' | 'BIDDED' | 'ON_THE_WAY'>(
    'ON_THE_WAY'
  );
  const { isDriver } = useDriver();

  return (
    <>
      <LoadInfoViewWrapper>
        <LoadInfowViewHeader>
          <Text weight="700">Load Details</Text>
          {isDriver && (
            <>
              {loadType === 'NEW' ? (
                <Button>Bid to the load</Button>
              ) : (
                loadType === 'BIDDED' && (
                  <Button
                    startIcon={<BidIcon />}
                    variant="outlined"
                    disabled
                    buttonType="disabled"
                  >
                    Bid to the load
                  </Button>
                )
              )}
            </>
          )}
        </LoadInfowViewHeader>
        <LoadInfoDataWrapperBox>
          <LoadCard {...data} />
          <LoadInfoCard loadType={loadType} />
        </LoadInfoDataWrapperBox>
        {/* if user type is creatot do next row */}
        <LoadCreator loadType={loadType} />
        {/* if user type is customer do next row */}
      </LoadInfoViewWrapper>
    </>
  );
};

export default LoadInfoView;
