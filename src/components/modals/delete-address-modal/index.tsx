import { Modal } from '@mui/material';
import Button from 'components/button/button';
import Text from 'components/typography/text';
import { useModal } from 'hooks/use-modal';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDeleteProfileAddress } from 'server-state/mutations/use-profile-address';
import {
  ChildrenWrapper,
  ModalButtonsBox,
  ModalWrapper,
} from './delete-addres-modal.styles';

const DeleteAddressModal: React.FC<{
  address_id?: number;
}> = ({ address_id, children }) => {
  const { close, isOpen, open } = useModal();
  const [t] = useTranslation();
  const deleteAddressrequest = useDeleteProfileAddress();

  const handleDelete = () => {
    deleteAddressrequest.mutate({ id: address_id });
    close();
  };
  return (
    <>
      <ChildrenWrapper onClick={open}>{children}</ChildrenWrapper>
      <Modal open={isOpen} onClose={close}>
        <ModalWrapper>
          <Text color="main_100">
            {t('Are you sure to delete? Actions cannot be undone')}
          </Text>
          <ModalButtonsBox>
            <Button aria-label="delete" onClick={handleDelete}>
              {t('Yes, delete')}
            </Button>
            <Button aria-label="cancel" onClick={close}>
              {t('Cancel')}
            </Button>
          </ModalButtonsBox>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default DeleteAddressModal;
