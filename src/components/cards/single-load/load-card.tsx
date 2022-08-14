import { Modal } from '@mui/material';
import Button from 'components/button/button';
import DistanceIcon from 'components/icons/distance.icon';
import LocationIcon from 'components/icons/location.icon';
import Text from 'components/typography/text';
import { useDriver } from 'hooks/use-driver';
import { useModal } from 'hooks/use-modal';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SingleLoadResponse } from 'types/load.types';
import { getDate } from 'utils/getDate';
import {
  GreenText,
  LoadBidCountWrapper,
  LoadCardBottomSideWrapper,
  LoadCardButtonWrapper,
  LoadCardDistanceSizeBox,
  LoadCardLocationInfoWrapper,
  LoadCardPickupDeliverBox,
  LoadCardSvgDistanceWrapper,
  LoadCardSvgWrapper,
  LoadCardWrapper,
  LoadCarLocationBox,
  ModalButtonsBox,
  ModalWrapper,
} from './load-card.styles';

const LoadCard: React.FC<{
  load: SingleLoadResponse;
  clickable?: boolean;
  withButtons?: boolean;
}> = ({ load, clickable = true, withButtons = false }) => {
  const { close, isOpen, open } = useModal();
  const navigate = useNavigate();
  const { load_id } = useParams<{ load_id: string }>();
  const { isDriver } = useDriver();

  const handleDelete = () => {
    // Delete api will connect here
    console.log(load_id);
  };
  const handleEdit = () => {
    navigate('/edit-load', {
      state: {
        type: 'EDIT',
        data: { ...load, id: load_id },
      },
    });
  };

  return (
    <>
      <LoadCardWrapper
        clickable={clickable}
        onClick={() => clickable && navigate(`/load/${load.id}`)}
      >
        <LoadCarLocationBox>
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
              <GreenText>Pickup location</GreenText>
              <Text weight="600">
                {load.pickup_point.district.title} district,{' '}
                {load.pickup_point.region.title} region
              </Text>
              <Text>{load.pickup_point.country.title}</Text>
              <Text>Pickup date & time</Text>
              <Text>{getDate({ date: load.latest_pick_up })}</Text>
            </LoadCardLocationInfoWrapper>
            <LoadCardLocationInfoWrapper>
              <GreenText>Delivery location</GreenText>
              <Text weight="600">
                {load.destination.district.title} district,{' '}
                {load.destination.region.title} region
              </Text>
              <Text>{load.destination.country.title}</Text>
              <Text>Pickup date & time</Text>
              <Text>{getDate({ date: load.latest_delivery })}</Text>
            </LoadCardLocationInfoWrapper>
          </LoadCardPickupDeliverBox>
        </LoadCarLocationBox>
        <LoadCardBottomSideWrapper>
          <LoadCardDistanceSizeBox>
            <DistanceIcon size="24" />
            <Text weight="600">894 km</Text>
          </LoadCardDistanceSizeBox>
          <LoadBidCountWrapper>
            <Text>Bid count : {load.bids_count}</Text>
            <Text>View count : {load.visits_count}</Text>
          </LoadBidCountWrapper>
          {withButtons && !isDriver && load.status !== 3 && (
            <LoadCardButtonWrapper>
              <Text onClick={open}>Delete Load</Text>
              <Text onClick={handleEdit}>Change details</Text>
            </LoadCardButtonWrapper>
          )}
        </LoadCardBottomSideWrapper>
      </LoadCardWrapper>
      <Modal open={isOpen} onClose={close}>
        <ModalWrapper>
          <Text color="main_100">
            Are you sure to delete? Actions cannot be undone
          </Text>
          <ModalButtonsBox>
            <Button aria-label="delete" onClick={handleDelete}>
              Yes, delete
            </Button>
            <Button aria-label="cancel" onClick={close}>
              Cancel
            </Button>
          </ModalButtonsBox>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default LoadCard;
