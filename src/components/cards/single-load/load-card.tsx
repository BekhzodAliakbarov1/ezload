import DistanceIcon from 'components/icons/distance.icon';
import LocationIcon from 'components/icons/location.icon';
import Text from 'components/typography/text';
import { useDriver } from 'hooks/use-driver';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SingleLoadResponse } from 'types/load.types';
import { getDate } from 'utils/getDate';
import {
  GreenText,
  LoadBidCountWrapper,
  LoadCardBottomSideWrapper,
  LoadCardDistanceSizeBox,
  LoadCardLocationInfoWrapper,
  LoadCardPickupDeliverBox,
  LoadCardSvgDistanceWrapper,
  LoadCardSvgWrapper,
  LoadCardWrapper,
  LoadCarLocationBox,
} from './load-card.styles';
import SingleLoadButtons from './single-load-buttons';

const LoadCard: React.FC<{
  load: SingleLoadResponse;
  clickable?: boolean;
  withButtons?: boolean;
  status: 1 | 2 | 3;
}> = ({ load, clickable = true, withButtons = false, status }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isDriver } = useDriver();

  return (
    <>
      <LoadCardWrapper clickable={clickable}>
        <LoadCarLocationBox
          onClick={() => clickable && navigate(`/load/${load.id}`)}
        >
          <LoadCardSvgDistanceWrapper>
            <LoadCardSvgWrapper>
              <LocationIcon fill="#fff" />
            </LoadCardSvgWrapper>
            <span />
            <LoadCardSvgWrapper>
              <LocationIcon fill="#fff" />
            </LoadCardSvgWrapper>
          </LoadCardSvgDistanceWrapper>
          <LoadCardPickupDeliverBox>
            <LoadCardLocationInfoWrapper>
              <GreenText>{t('Pickup location')}</GreenText>
              <Text weight="600">
                {load.pickup_point.district.title} {t('District')},{' '}
                {load.pickup_point.region.title} {t('Region')}
              </Text>
              <Text>{load.pickup_point.country.title}</Text>
              <Text>{t('Pickup date & time')}</Text>
              <Text>{getDate({ date: load.latest_pick_up })}</Text>
            </LoadCardLocationInfoWrapper>
            <LoadCardLocationInfoWrapper>
              <GreenText>{t('Delivery location')}</GreenText>
              <Text weight="600">
                {load.destination.district.title} {t('District')},{' '}
                {load.destination.region.title} {t('Region')}
              </Text>
              <Text>{load.destination.country.title}</Text>
              <Text>{t('Delivery date & time')}</Text>
              <Text>{getDate({ date: load.latest_delivery })}</Text>
            </LoadCardLocationInfoWrapper>
          </LoadCardPickupDeliverBox>
        </LoadCarLocationBox>
        <LoadCardBottomSideWrapper>
          <LoadCardDistanceSizeBox>
            {/* <DistanceIcon size="24" />
            <Text weight="600">894 km</Text> */}
          </LoadCardDistanceSizeBox>
          <LoadBidCountWrapper>
            <Text>
              {t('Bid count:')}
              {load.bids_count}
            </Text>
            <Text>
              {t('View count:')} {load.visits_count}
            </Text>
          </LoadBidCountWrapper>
        </LoadCardBottomSideWrapper>
        {withButtons && !isDriver && (
          <SingleLoadButtons status={status} load={load} />
        )}
      </LoadCardWrapper>
    </>
  );
};

export default LoadCard;
