import DriverCard from 'components/cards/driver-card';
import Text from 'components/typography/text';
import React from 'react';
import {
  LoadBidDriverCard,
  LoadBidDriverCostWrapper,
  LoadBidsDataBox,
  LoadBidsWrapper,
} from './load-bids.styles';
import Button from 'components/button/button';
import DollarIcon from 'components/icons/dollar.icon';
import { colors } from 'styles/variables';
import { useModal } from 'hooks/use-modal';
import LoadBidsModals from './load-bids-modals';
import { SingleLoadDetailsResponse } from 'types/load.types';
import { useNavigate } from 'react-router-dom';

const LoadBids: React.FC<{
  data?: SingleLoadDetailsResponse;
}> = ({ data }) => {
  const { close, isOpen, open } = useModal();
  const navigate = useNavigate();

  return (
    <>
      <LoadBidsWrapper>
        <Text weight="700">{data?.status === 1 ? 'Bids' : 'Driver'}</Text>
        {data?.status === 1 ? (
          <LoadBidsDataBox>
            {data?.bids?.map((bid) => (
              <LoadBidDriverCard key={bid.id}>
                <div
                  onClick={() =>
                    navigate(`/load-bidded-driver/3`, {
                      state: {
                        id: bid.id,
                        price: bid.price,
                      },
                    })
                  }
                >
                  <DriverCard
                    first_name={bid.owner.first_name}
                    id={3} //add correct id when backend send true
                    rates_avg={bid.average_rate}
                    image={bid.owner.profile_picture?.file}
                    shadow
                    sizes="104px"
                    clickable
                    bg_color={colors.green_5}
                  />
                </div>
                <LoadBidDriverCostWrapper>
                  <DollarIcon />
                  <Text weight="600">{bid.price} USD</Text>
                </LoadBidDriverCostWrapper>
              </LoadBidDriverCard>
            ))}
          </LoadBidsDataBox>
        ) : (
          <LoadBidsDataBox>
            {/* here will be user which bid accepted */}
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
          {data?.status === 1
            ? 'Delete load'
            : data?.status === 2 && 'Cancel the driver'}
        </Button>
      </LoadBidsWrapper>
      {data?.id && (
        <LoadBidsModals
          id={data.id}
          close={close}
          isOpen={isOpen}
          status={data.status}
        />
      )}
    </>
  );
};

export default LoadBids;
