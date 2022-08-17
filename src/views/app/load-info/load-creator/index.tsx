import React from 'react';
import { ProfileImg } from 'assets/svg';
import {
  LoadCancelModalWrapper,
  LoadCardButtonWrapper,
  LoadCardDataWrapper,
  LoadCreatorWrapper,
  ModalInputsWrapper,
  ModalStyledTextFiled,
  ModalButtonsWrapper,
  DeliveredModalWrapper,
  DeliveredModalButtonsWrapper,
} from './load-creator.styles';
import Avatar from 'components/avatar';
import Text from 'components/typography/text';
import Button from 'components/button/button';
import { useModal } from 'hooks/use-modal';
import { Modal } from '@mui/material';
import Input from 'components/input/input';
import { SingleLoadDetailsResponse } from 'types/load.types';
import { useDeliverLoad } from 'server-state/mutations/use-deliver-load';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';

const LoadCreator: React.FC<{
  data?: SingleLoadDetailsResponse;
}> = ({ data }) => {
  const cacelModal = useModal();
  const deliverModal = useModal();
  const deliverLoadRequest = useDeliverLoad();
  const { load_id } = useParams<{ load_id: string }>();
  const { t } = useTranslation();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // for fun
    close();
  };

  const deliveredClick = () => {
    deliverLoadRequest.mutate(
      {
        load_id,
      },
      {
        onSuccess() {
          deliverModal.close();
        },
      }
    );
  };

  return (
    <>
      <LoadCreatorWrapper>
        <Avatar sizes="96px" src={ProfileImg} />
        <LoadCardDataWrapper>
          <Text color="main_60">{t('Load owner')}</Text>
          <Text weight="600">{data?.owner.first_name}</Text>
          <Text color="main_80" weight="600">
            +99894 555 66 66
          </Text>
        </LoadCardDataWrapper>
      </LoadCreatorWrapper>
      {data?.status === 2 && (
        <LoadCardButtonWrapper>
          <Button onClick={deliverModal.open}>{t('Delivered the load')}</Button>
          <Button onClick={cacelModal.open} buttonType="warning">
            {t('Cancel this load')}
          </Button>
        </LoadCardButtonWrapper>
      )}
      {/* CANCEL THE LOAD */}
      <Modal open={cacelModal.isOpen} onClose={cacelModal.close}>
        <LoadCancelModalWrapper onSubmit={handleSubmit}>
          <Text className="header">
            {t('Are you sure you want to cancel the load?')}
          </Text>
          <ModalInputsWrapper>
            <Input placeholder="Other" />
            <ModalStyledTextFiled
              multiline
              fullWidth
              placeholder={t(
                'Please, provide reason and explain of cancelling the load'
              )}
            />
          </ModalInputsWrapper>
          <ModalButtonsWrapper>
            <Button>{t('Submit')}</Button>
            <Button onClick={close} type="button" buttonType="white">
              {t('Cancel')}
            </Button>
          </ModalButtonsWrapper>
        </LoadCancelModalWrapper>
      </Modal>
      {/* DELIVER THE LOAD */}
      <Modal open={deliverModal.isOpen} onClose={deliverModal.close}>
        <DeliveredModalWrapper>
          <Text>
            {t(
              'Are you sure you want to complete the load? Make sure to deliver the load to the destination address'
            )}
          </Text>
          <DeliveredModalButtonsWrapper>
            <Button onClick={deliveredClick} buttonType="contained">
              {t('Submit')}
            </Button>
            <Button onClick={deliverModal.close} buttonType="white">
              {t('Cancel')}
            </Button>
          </DeliveredModalButtonsWrapper>
        </DeliveredModalWrapper>
      </Modal>
    </>
  );
};

export default LoadCreator;
