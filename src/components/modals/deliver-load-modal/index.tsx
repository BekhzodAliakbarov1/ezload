import { Modal } from '@mui/material';
import Button from 'components/button/button';
import Text from 'components/typography/text';
import { useModal } from 'hooks/use-modal';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDeliverLoad } from 'server-state/mutations/use-deliver-load';
import {
  ModalWrapper,
  ModalButtonsWrapper,
  ChildrenWrapper,
} from './deliver-load-modal.styles';

const DeliverLoadModal: React.FC<{
  load_id?: string;
}> = ({ children, load_id }) => {
  const { t } = useTranslation();
  const { close, isOpen, open } = useModal();
  const deliverLoadRequest = useDeliverLoad({ load_id });

  const submitHandler = () => {
    deliverLoadRequest.mutate(
      {
        load_id,
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
          <Text>
            {t(
              'Are you sure you want to complete the load? Make sure to deliver the load to the destination address'
            )}
          </Text>
          <ModalButtonsWrapper>
            <Button onClick={submitHandler} buttonType="contained">
              {t('Submit')}
            </Button>
            <Button onClick={close} buttonType="white">
              {t('Cancel')}
            </Button>
          </ModalButtonsWrapper>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default DeliverLoadModal;
