import DriverCard from 'components/cards/driver-card';
import Text from 'components/typography/text';
import React from 'react';
import {
  LoadBidDriverCard,
  LoadBidDriverCostWrapper,
  LoadBidsDataBox,
  LoadBidsWrapper,
  NoLoadBodsWrapper,
} from './load-bids.styles';
import Button from 'components/button/button';
import DollarIcon from 'components/icons/dollar.icon';
import { colors } from 'styles/variables';
import { useModal } from 'hooks/use-modal';
import LoadBidsModals from './load-bids-modals';
import { SingleLoadDetailsResponse } from 'types/load.types';
import { useNavigate } from 'react-router-dom';
import FileIcon from 'components/icons/file.icon';

const LoadBids: React.FC<{
  data?: SingleLoadDetailsResponse;
}> = ({ data }) => {
  const { close, isOpen, open } = useModal();
  const navigate = useNavigate();
  console.log(data?.bids);

  return (
    <>
      <LoadBidsWrapper>
        <Text weight="700">{data?.status === 1 ? 'Bids' : 'Driver'}</Text>
        {data?.status === 1 ? (
          <LoadBidsDataBox>
            {data?.bids && data.bids.length > 0 ? (
              data.bids.map((bid) => (
                <LoadBidDriverCard key={bid.id}>
                  <div
                    onClick={() => navigate(`/load-bidded-driver/${bid.id}`)}
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
              ))
            ) : (
              <NoLoadBodsWrapper>
                <FileIcon size="100" />
                <Text>No Bids</Text>
              </NoLoadBodsWrapper>
            )}
          </LoadBidsDataBox>
        ) : (
          <LoadBidsDataBox>
            <DriverCard
              shadow
              clickable
              sizes="104px"
              first_name={data?.driver?.first_name ?? ''}
              id={3}
              rates_avg={data?.driver?.average_rate ?? 3}
              image={data?.driver?.profile_picture.file}
              bg_color={colors.green_5}
            />
          </LoadBidsDataBox>
        )}
        <Button fullWidth onClick={open}>
          {data?.status === 1
            ? 'Delete load'
            : data?.status === 2 && 'Cancel the driver'}
        </Button>
      </LoadBidsWrapper>
      <LoadBidsModals data={data} close={close} isOpen={isOpen} />
    </>
  );
};

export default LoadBids;
