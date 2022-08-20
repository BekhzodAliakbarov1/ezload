import { Modal } from '@mui/material';
import Button from 'components/button/button';
import Text from 'components/typography/text';
import { useModal } from 'hooks/use-modal';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDeleteLoad } from 'server-state/mutations/use-load';
import {
  ChildrenWrapper,
  ModalButtonsBox,
  ModalWrapper,
} from './delete-load-modal.styles';

const DeletLoadModal: React.FC<{
  load_id?: number;
}> = ({ children, load_id }) => {
  const { t } = useTranslation();
  const { close, isOpen, open } = useModal();
  const deleteLoadRequest = useDeleteLoad();

  const handleDelete = () => {
    deleteLoadRequest.mutate(
      {
        id: load_id,
      },
      {
        onSuccess() {
          close();
        },
      }
    );
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
            <Button
              loading={deleteLoadRequest.isLoading}
              aria-label="delete"
              onClick={handleDelete}
            >
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

export default DeletLoadModal;
