import { Modal } from '@mui/material';
import Button from 'components/button/button';
import Text from 'components/typography/text';
import { useModal } from 'hooks/use-modal';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDeleteBid } from 'server-state/mutations/use-delete-bid';
import {
  ChildrenWrapper,
  ModalButtonsWrapper,
  ModalWrapper,
} from './cancel-bid-modal.styles';

const CancelBidModal: React.FC<{
  load_id?: string;
  bid_id?: number;
}> = ({ children, bid_id, load_id }) => {
  const { close, isOpen, open } = useModal();
  const { t } = useTranslation();
  const deleteBidRequest = useDeleteBid({ load_id });

  const submitHandler = () => {
    deleteBidRequest.mutate(
      {
        bid_id,
      },
      {
        onSuccess() {
          close;
        },
      }
    );
  };

  return (
    <>
      <ChildrenWrapper onClick={open}>{children}</ChildrenWrapper>

      <Modal open={isOpen} onClose={close}>
        <ModalWrapper>
          <Text>{t('Are you sure you want to cancel ')} ?</Text>
          <ModalButtonsWrapper>
            <Button aria-label="submit" onClick={submitHandler}>
              {t('Submit')}
            </Button>
            <Button aria-label="cancel" buttonType="white" onClick={close}>
              {t('Cancel')}
            </Button>
          </ModalButtonsWrapper>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default CancelBidModal;
