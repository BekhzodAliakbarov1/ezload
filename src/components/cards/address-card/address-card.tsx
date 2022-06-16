import { Modal } from '@mui/material';
import Button from 'components/button/button';
import BucketIcon from 'components/icons/bucket';
import Text from 'components/typography/text';
import { useModal } from 'hooks/use-modal';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AddressInterface } from 'types/address.types';
import {
  AddressCardButtonsWrapper,
  AddressCardWrapper,
  AddressCardDataLine,
  StyledIconButton,
  ModalButtonsBox,
  ModalWrapper,
} from './address-card.styles';

const AddressCard: React.FC<AddressInterface> = ({
  address_1,
  address_2,
  country,
  region,
  street,
  zip_code,
  id,
}) => {
  const { close, isOpen, open } = useModal();
  const navigate = useNavigate();

  const handleDelete = () => {
    // Delete api will connect here
    console.log(id);
  };

  const handleClick = () => {
    navigate('/profile/edit-address', {
      state: {
        type: 'EDIT',
        data: { address_1, address_2, country, region, street, zip_code, id },
      },
    });
  };

  return (
    <>
      <AddressCardWrapper>
        <AddressCardDataLine>
          <Text>
            {address_1},{address_2},{country},{region},{street},{zip_code}
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
          <Text>Are you sure to delete? Actions cannot be undone</Text>
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
