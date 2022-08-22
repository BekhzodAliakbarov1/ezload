import { Modal } from '@mui/material';
import Button from 'components/button/button';
import Input from 'components/input/input';
import Text from 'components/typography/text';
import { useModal } from 'hooks/use-modal';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCancelBid } from 'server-state/queries/use-bid';
import {
  ChildrenWrapper,
  ModalWrapper,
  ModalButtonsWrapper,
  ModalInputsWrapper,
  ModalStyledTextFiled,
} from './cancel-driver-modal.styles';

const CancelDriverModal: React.FC<{
  driver_name?: string;
  accepted_bid?: number;
  load_id?: string;
}> = ({ accepted_bid, children, driver_name, load_id }) => {
  const { t } = useTranslation();
  const { close, isOpen, open } = useModal();
  const [cancelDriverSteps, setCancelDriverSteps] = useState<1 | 2>(1);
  const cancelBidRequest = useCancelBid({ load_id });

  const cancelHandler = () => {
    setCancelDriverSteps(1);
    close();
  };

  const submitHandler = () => {
    cancelBidRequest.mutate(
      {
        bid_id: accepted_bid,
      },
      {
        onSuccess() {
          close();
        },
      }
    );
    // Writing feed back will implement soon just we should add setCancelDriverSteps 2 and it move next step
  };

  return (
    <>
      <ChildrenWrapper onClick={open}>{children}</ChildrenWrapper>
      <Modal open={isOpen} onClose={close}>
        <ModalWrapper type={cancelDriverSteps === 1 ? 'small' : 'big'}>
          {cancelDriverSteps === 1 && (
            <>
              <Text>
                {t('Are you sure you want to cancel ')} ”{driver_name}”{' '}
                {t('assigned to the order ID: ')} {accepted_bid}?
              </Text>
              <ModalButtonsWrapper>
                <Button
                  loading={cancelBidRequest.isLoading}
                  aria-label="submit"
                  onClick={submitHandler}
                >
                  {t('Submit')}
                </Button>
                <Button
                  aria-label="cancel"
                  buttonType="white"
                  onClick={cancelHandler}
                >
                  {t('Cancel')}
                </Button>
              </ModalButtonsWrapper>
            </>
          )}
          {cancelDriverSteps === 2 && (
            <>
              <Text>Provide reason</Text>
              <ModalInputsWrapper>
                <Input placeholder={t('Other')} />
                <ModalStyledTextFiled
                  multiline
                  fullWidth
                  placeholder={t(
                    'Please, provide reason and explain of cancelling the load'
                  )}
                />
              </ModalInputsWrapper>
              <ModalButtonsWrapper>
                <Button aria-label="submit" onClick={() => console.log('1221')}>
                  {t('Submit')}
                </Button>
                <Button
                  aria-label="cancel"
                  buttonType="white"
                  onClick={cancelHandler}
                >
                  {t('Cancel')}
                </Button>
              </ModalButtonsWrapper>
            </>
          )}
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default CancelDriverModal;
