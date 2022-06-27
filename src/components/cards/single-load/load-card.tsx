import { Modal } from '@mui/material';
import Button from 'components/button/button';
import DistanceIcon from 'components/icons/distance.icon';
import LocationIcon from 'components/icons/location.icon';
import Text from 'components/typography/text';
import { useModal } from 'hooks/use-modal';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SingleLoadInterface } from 'types/load.types';
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

const LoadCard: React.FC<SingleLoadInterface> = ({
  bid_count,
  deliver_address,
  deliver_country,
  deliver_date,
  distance,
  id,
  pickup_address,
  pickup_country,
  pickup_date,
  view_count,
  clickable = false,
  loadType = 'new',
}) => {
  const { close, isOpen, open } = useModal();
  const navigate = useNavigate();

  const handleDelete = () => {
    // Delete api will connect here
    console.log(id);
  };
  const handleEdit = () => {
    navigate('/edit-load', {
      state: {
        type: 'EDIT',
        data: {
          bid_count,
          deliver_address,
          deliver_country,
          deliver_date,
          distance,
          id,
          pickup_address,
          pickup_country,
          pickup_date,
          view_count,
        },
      },
    });
  };

  return (
    <>
      <LoadCardWrapper
        clickable={clickable}
        onClick={() => navigate(`/load/${loadType}/${id}`)}
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
              <Text weight="600">{pickup_address}</Text>
              <Text>{pickup_country}</Text>
              <Text>Pickup date & time</Text>
              <Text>{pickup_date}</Text>
            </LoadCardLocationInfoWrapper>
            <LoadCardLocationInfoWrapper>
              <GreenText>Delivery location</GreenText>
              <Text weight="600">{deliver_address}</Text>
              <Text>{deliver_country}</Text>
              <Text>Pickup date & time</Text>
              <Text>{deliver_date}</Text>
            </LoadCardLocationInfoWrapper>
          </LoadCardPickupDeliverBox>
        </LoadCarLocationBox>
        <LoadCardBottomSideWrapper>
          <LoadCardDistanceSizeBox>
            <DistanceIcon size="24" />
            <Text weight="600">{distance}</Text>
          </LoadCardDistanceSizeBox>
          <LoadBidCountWrapper>
            <Text>Bid count : {bid_count}</Text>
            <Text>View count : {view_count}</Text>
          </LoadBidCountWrapper>
          <LoadCardButtonWrapper>
            <Text onClick={open}>Delete Load</Text>
            <Text onClick={handleEdit}>Change details</Text>
          </LoadCardButtonWrapper>
        </LoadCardBottomSideWrapper>
      </LoadCardWrapper>
      <Modal open={isOpen} onClose={close}>
        <ModalWrapper>
          <Text color="main_100">
            Are you sure to delete? Actions cannot be undone
          </Text>
          <ModalButtonsBox>
            <Button onClick={handleDelete}>Yes, delete</Button>
            <Button onClick={close}>Cancel</Button>
          </ModalButtonsBox>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default LoadCard;
