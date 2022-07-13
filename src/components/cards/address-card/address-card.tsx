import { Modal } from '@mui/material';
import Button from 'components/button/button';
import BucketIcon from 'components/icons/bucket';
import Text from 'components/typography/text';
import { useModal } from 'hooks/use-modal';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDeleteProfileAddress } from 'server-state/mutations/use-profile-address';
import { AddressInterface } from 'types/address.types';
import {
  AddressCardButtonsWrapper,
  AddressCardWrapper,
  AddressCardDataLine,
  StyledIconButton,
  ModalButtonsBox,
  ModalWrapper,
} from './address-card.styles';

const AddressCard: React.FC<AddressInterface> = ({ address, id }) => {
  const { close, isOpen, open } = useModal();
  const navigate = useNavigate();
  const deleteAddressrequest = useDeleteProfileAddress();

  const handleDelete = () => {
    deleteAddressrequest.mutate({ id: String(id) });
    close();
  };

  const handleClick = () => {
    navigate('/profile/edit-address', {
      state: {
        type: 'EDIT',
        data: { address, id },
      },
    });
  };

  return (
    <>
      <AddressCardWrapper>
        <AddressCardDataLine>
          <Text color="main_100">
            {address.country.title}
            {address.region.title && `, ${address.region.title}`}
            {address.district.title && `, ${address.district.title}`}
            {address.postal_code && `, ${address.postal_code}`}
          </Text>
          <AddressCardButtonsWrapper>
            <Button onClick={handleClick}>Edit</Button>
            <StyledIconButton onClick={open}>
              <BucketIcon />
            </StyledIconButton>
          </AddressCardButtonsWrapper>
        </AddressCardDataLine>
      </AddressCardWrapper>
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

export default AddressCard;
