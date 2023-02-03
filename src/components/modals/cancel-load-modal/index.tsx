import { Modal } from '@mui/material';
import Button from 'components/button/button';
import Input from 'components/input/input';
import Text from 'components/typography/text';
import { useModal } from 'hooks/use-modal';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCancelLoad } from 'server-state/mutations/use-cancel-load';
import {
  ModalWrapper,
  ModalButtonsWrapper,
  ModalInputsWrapper,
  ModalStyledTextFiled,
  ChildrenWrapper,
} from './cancel-load-modal.styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
const CancelLoadModal: React.FC<{
  load_id?: string;
}> = ({ children, load_id }) => {
  const { close, isOpen, open } = useModal();
  const { t } = useTranslation();
  const cancelLoadRequest = useCancelLoad({ load_id });
  const [comment, setComment] = useState<string>('');
  const [customer_reason, setCustomer_reason] = useState<any>();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // after know what should use then implement inputs
    cancelLoadRequest.mutate(
      { comment, customer_reason },
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
        <ModalWrapper onSubmit={handleSubmit}>
          <Text className="header">
            {t('Are you sure you want to cancel the load?')}
          </Text>
          <ModalInputsWrapper>
            <Select
              required
              placeholder="Other"
              onChange={(e) => setCustomer_reason(e.target.value)}
            >
              <MenuItem value={1}>{t("Couldn't agree on a price")}</MenuItem>
              <MenuItem value={2}>
                {t(
                  "The customer's transporting cargo is not suitable for this transportation"
                )}
              </MenuItem>
              <MenuItem value={3}>{t('Customer asked to cancel')}</MenuItem>
              <MenuItem value={4}>{t('Changed my mind')}</MenuItem>
            </Select>
            <ModalStyledTextFiled
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              multiline
              fullWidth
              placeholder={t(
                'Please, provide reason and explain of cancelling the load'
              )}
            />
          </ModalInputsWrapper>
          <ModalButtonsWrapper>
            <Button loading={cancelLoadRequest.isLoading} type="submit">
              {t('Submit')}
            </Button>
            <Button onClick={close} type="button" buttonType="white">
              {t('Cancel')}
            </Button>
          </ModalButtonsWrapper>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default CancelLoadModal;
