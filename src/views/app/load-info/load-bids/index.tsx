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

const data = [
  {
    id: 1,
    load_weight: '20 Ton',
    car_type: 'Isuzu ',
    image: image,
    name: 'Igor Tsoy',
    rating: 4,
    load_number: '100+',
    bid_cost: '3 000 000 sum',
  },
  {
    id: 2,
    load_weight: '1000 Ton',
    car_type: 'Volvo',
    image: image,
    name: 'Farid Ahmedov',
    rating: 3,
    load_number: '400+',
    bid_cost: '3 000 000 sum',
  },
  {
    id: 3,
    load_weight: '20 Ton',
    car_type: 'Isuzu ',
    image: image,
    name: 'Igor Tsoy',
    rating: 3,
    load_number: '100+',
    bid_cost: '3 000 000 sum',
  },
  {
    id: 4,
    load_weight: '20 Ton',
    car_type: 'Isuzu ',
    image: image,
    name: 'Igor Tsoy',
    rating: 3,
    load_number: '100+',
    bid_cost: '3 000 000 sum',
  },
  {
    id: 5,
    load_weight: '20 Ton',
    car_type: 'Isuzu ',
    image: image,
    name: 'Igor Tsoy',
    rating: 3,
    load_number: '100+',
    bid_cost: '3 000 000 sum',
  },
  {
    id: 6,
    load_weight: '20 Ton',
    car_type: 'Isuzu ',
    image: image,
    name: 'Igor Tsoy',
    rating: 3,
    load_number: '100+',
    bid_cost: '3 000 000 sum',
  },
];

const singleData = {
  id: 1,
  load_weight: '20 Ton',
  car_type: 'Isuzu ',
  image: image,
  name: 'Igor Tsoy',
  rating: 4,
  load_number: '100+',
  bid_cost: '3 000 000 sum',
};

const LoadBids: React.FC<{ loadType: 'NEW' | 'BIDDED' | 'ON_THE_WAY' }> = ({
  loadType,
}) => {
  const { close, isOpen, open } = useModal();

  return (
    <>
      <LoadBidsWrapper>
        <Text weight="700">{loadType === 'NEW' ? 'Bids' : 'Driver'}</Text>
        {loadType === 'NEW' ? (
          <LoadBidsDataBox>
            {data.map((driver) => (
              <LoadBidDriverCard key={driver.id}>
                <Link to={`/load-bidded-driver/${driver.id}`}>
                  <DriverCard
                    {...driver}
                    shadow
                    sizes="104px"
                    clickable
                    bg_color={colors.green_5}
                  />
                </Link>
                <LoadBidDriverCostWrapper>
                  <DollarIcon />
                  <Text weight="600">{driver.bid_cost}</Text>
                </LoadBidDriverCostWrapper>
              </LoadBidDriverCard>
            ))}
          </LoadBidsDataBox>
        ) : (
          <LoadBidsDataBox>
            <DriverCard
              {...singleData}
              shadow
              sizes="104px"
              clickable
              bg_color={colors.green_5}
            />
          </LoadBidsDataBox>
        )}
        <Button fullWidth onClick={open}>
          {loadType === 'NEW'
            ? 'Delete load'
            : loadType === 'ON_THE_WAY' && 'Cancel the driver'}
        </Button>
      </LoadBidsWrapper>
      <LoadBidsModals close={close} isOpen={isOpen} loadType={loadType} />
    </>
  );
};

export default LoadBids;
