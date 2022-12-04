import Button from 'components/button/button';
import BucketIcon from 'components/icons/bucket';
import DeleteAddressModal from 'components/modals/delete-address-modal';
import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AddressInterface } from 'types/address.types';
import {
  AddressCardButtonsWrapper,
  AddressCardWrapper,
  AddressCardDataLine,
  StyledIconButton,
} from './address-card.styles';

const AddressCard: React.FC<AddressInterface> = ({ address, id }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
          <Text>
            {address.country.title}
            {address.region.title && `, ${address.region.title}`}
            {address.district.title && `, ${address.district.title}`}
            {address.postal_code && `, ${address.postal_code}`}
          </Text>
          <AddressCardButtonsWrapper>
            <Button
              className="edit-button"
              aria-label="Edit"
              onClick={handleClick}
            >
              {t('Edit')}
            </Button>
            <DeleteAddressModal address_id={id}>
              <StyledIconButton aria-label="delete">
                <BucketIcon />
              </StyledIconButton>
            </DeleteAddressModal>
          </AddressCardButtonsWrapper>
        </AddressCardDataLine>
      </AddressCardWrapper>
    </>
  );
};

export default AddressCard;
