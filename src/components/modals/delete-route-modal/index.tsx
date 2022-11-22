import { Modal } from '@mui/material';
import Button from 'components/button/button';
import Text from 'components/typography/text';
import { useModal } from 'hooks/use-modal';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDeleteRoute } from 'server-state/mutations/use-delete-route';
import {
  ChildrenWrapper,
  ModalButtonsBox,
  ModalWrapper,
} from './delete-route-modal.styles';

const DeletRouteModal: React.FC<{
  route_id?: number;
}> = ({ children, route_id }) => {
  const { t } = useTranslation();
  const { close, isOpen, open } = useModal();
  const deleteRouteRequest = useDeleteRoute();

  const handleDelete = () => {
    deleteRouteRequest.mutate(
      {
        route_id,
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
              loading={deleteRouteRequest.isLoading}
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

export default DeletRouteModal;
