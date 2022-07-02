import DriverCard from 'components/cards/driver-card';
import Text from 'components/typography/text';
import React from 'react';
import {
  LoadBidDriverCard,
  LoadBidDriverCostWrapper,
  LoadBidsDataBox,
  LoadBidsWrapper,
} from './load-bids.styles';
import image from 'assets/img/profile.png';
import Button from 'components/button/button';
import DollarIcon from 'components/icons/dollar.icon';
import { colors } from 'styles/variables';
import { Link } from 'react-router-dom';
import { useModal } from 'hooks/use-modal';
import LoadBidsModals from './load-bids-modals';
import { SingleLoadDetailsResponse } from 'types/load.types';

const LoadBids: React.FC<{
  loadType: 'NEW' | 'BIDDED' | 'ON_THE_WAY';
  data?: SingleLoadDetailsResponse;
}> = ({ loadType, data }) => {
  const { close, isOpen, open } = useModal();

  return (
    <>
      <LoadBidsWrapper>
        <Text weight="700">{loadType === 'NEW' ? 'Bids' : 'Driver'}</Text>
        {loadType === 'NEW' ? (
          <LoadBidsDataBox>
            {data?.bids?.map((driver) => (
              <LoadBidDriverCard key={driver.id}>
                <Link to={`/load-bidded-driver/3`}>
                  {/* <Link to={`/load-bidded-driver/${driver.id}`}>  */}
                  <DriverCard
                    first_name={driver.owner.first_name}
                    id={3} //add correct id when backend send true
                    rates_avg={driver.average_rate}
                    image={driver.owner.profile_picture?.file}
                    shadow
                    sizes="104px"
                    clickable
                    bg_color={colors.green_5}
                  />
                </Link>
                <LoadBidDriverCostWrapper>
                  <DollarIcon />
                  <Text weight="600">{driver.price} USD</Text>
                </LoadBidDriverCostWrapper>
              </LoadBidDriverCard>
            ))}
          </LoadBidsDataBox>
        ) : (
          <LoadBidsDataBox>
            {/* <DriverCard
              {...data[0]}
              shadow
              sizes="104px"
              clickable
              bg_color={colors.green_5}
            /> */}
          </LoadBidsDataBox>
        )}
        <Button fullWidth onClick={open}>
          {loadType === 'NEW'
            ? 'Delete load'
            : loadType === 'ON_THE_WAY' && 'Cancel the driver'}
        </Button>
      </LoadBidsWrapper>
      {data?.id && (
        <LoadBidsModals
          id={data.id}
          close={close}
          isOpen={isOpen}
          loadType={loadType}
        />
      )}
    </>
  );
};

export default LoadBids;
