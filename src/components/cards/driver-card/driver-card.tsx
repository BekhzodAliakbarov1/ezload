import React from 'react';
import Avatar from 'components/avatar';
import { DriverCardInfoWrapper, DriverCardWrapper } from './driver-card.styles';
import Text from 'components/typography/text';
import RatingComponent from 'components/rating/rating';
import { CSSProperties } from 'styled-components';

const DriverCard: React.FC<{
  image: string;
  name: string;
  car_type: string;
  load_weight: string;
  load_number: string;
  rating: number;
  sizes?: string;
  shadow?: boolean;
  styles?: CSSProperties;
}> = ({
  load_weight,
  car_type,
  image,
  name,
  rating,
  sizes,
  styles,
  load_number,
  shadow = false,
}) => {
  return (
    <DriverCardWrapper style={styles} shadow={shadow}>
      <Avatar sizes={sizes} src={image} />
      <DriverCardInfoWrapper>
        <Text color="main" size="lg" weight="700">
          {name}
        </Text>
        <Text size="sm" color="light" weight="400">
          {car_type} ({load_weight})
        </Text>
        <Text size="md" weight="600">
          {load_number}+ LOADS
        </Text>
        <RatingComponent value={rating} />
      </DriverCardInfoWrapper>
    </DriverCardWrapper>
  );
};

export default DriverCard;
