import React from 'react';
import Avatar from 'components/avatar';
import { DriverCardInfoWrapper, DriverCardWrapper } from './driver-card.styles';
import Text from 'components/typography/text';
import RatingComponent from 'components/rating/rating';

const DriverCard: React.FC<{
  image: string;
  name: string;
  car_type: string;
  load_weight: string;
  load_number: string;
  rating: number;
  shadow?: boolean;
}> = ({
  load_weight,
  car_type,
  image,
  name,
  rating,
  load_number,
  shadow = false,
}) => {
  return (
    <DriverCardWrapper shadow={shadow}>
      <Avatar src={image} />
      <DriverCardInfoWrapper>
        <Text color="main" size="lg" weight="700">
          {name}
        </Text>
        <Text size="sm" color="light" weight="400">
          {car_type} ({load_weight})
        </Text>
        <Text size="md" weight="600">
          {load_number}+ Loads
        </Text>
        <RatingComponent value={rating} />
      </DriverCardInfoWrapper>
    </DriverCardWrapper>
  );
};

export default DriverCard;
