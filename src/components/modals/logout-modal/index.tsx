import { Modal } from '@mui/material';
import Button from 'components/button/button';
import Text from 'components/typography/text';
import { useAuth } from 'global-state/auth/auth.state';
import { useModal } from 'hooks/use-modal';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDeliverLoad } from 'server-state/mutations/use-deliver-load';
import {
  ModalWrapper,
  ModalButtonsWrapper,
  ChildrenWrapper,
} from './logout-modal.styles';

const LogoutModal: React.FC<{
  load_id?: string;
}> = ({ children, load_id }) => {
  const { t } = useTranslation();
  const { close, isOpen, open } = useModal();
  const { logout } = useAuth();
  const deliverLoadRequest = useDeliverLoad({ load_id });

  const submitHandler = () => {
    logout();
    close();
  };
  return (
    <>
      <ChildrenWrapper onClick={open}>{children}</ChildrenWrapper>

      <Modal open={isOpen} onClose={close}>
        <ModalWrapper>
          <Text>{t('Are you sure to log out from Ezload?')}</Text>
          <ModalButtonsWrapper>
            <Button
              loading={deliverLoadRequest.isLoading}
              onClick={submitHandler}
              buttonType="contained"
            >
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

export default LogoutModal;
