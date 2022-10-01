import React from 'react';
import Avatar from 'components/avatar';
import { DriverCardInfoWrapper, DriverCardWrapper } from './driver-card.styles';
import Text from 'components/typography/text';
import RatingComponent from 'components/rating/rating';
import { CSSProperties } from 'styled-components';
import { useTranslation } from 'react-i18next';

const DriverCard: React.FC<{
  id: number;
  image?: string;
  first_name: string;
  vehicle?: {
    capacity: string;
    title: string;
    licence_plate: string;
  };
  rates_avg: number;
  sizes?: string;
  shadow?: boolean;
  styles?: CSSProperties;
  clickable?: boolean;
  bg_color?: string;
}> = ({
  image,
  first_name,
  rates_avg,
  sizes,
  styles,
  vehicle = { capacity: 0, licence_plate: 0, title: '' },
  shadow = false,
  clickable = false,
  bg_color,
}) => {
  const { t } = useTranslation();
  console.log({ bg_color });
  return (
    <DriverCardWrapper
      bg_color={bg_color}
      style={styles}
      shadow={shadow}
      clickable={clickable}
    >
      <Avatar sizes={sizes} src={image} />
      <DriverCardInfoWrapper>
        <Text color="main_100" size="lg" weight="700">
          {first_name.substring(0, 20)}
        </Text>
        <Text size="sm" color="main_100" weight="400">
          {vehicle?.title} ({vehicle?.capacity ?? '0'} Ton)
        </Text>
        <Text size="md" weight="600">
          100+ {t('LOADS')}
        </Text>
        <RatingComponent value={rates_avg} />
      </DriverCardInfoWrapper>
    </DriverCardWrapper>
  );
};

export default DriverCard;
