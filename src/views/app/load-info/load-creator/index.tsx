import React from 'react';
import { ProfileImg } from 'assets/svg';
import {
  LoadCardButtonWrapper,
  LoadCardDataWrapper,
  LoadCreatorWrapper,
  DeliveredModalWrapper,
  DeliveredModalButtonsWrapper,
} from './load-creator.styles';
import Avatar from 'components/avatar';
import Text from 'components/typography/text';
import Button from 'components/button/button';
import { useModal } from 'hooks/use-modal';
import { Modal } from '@mui/material';
import { SingleLoadDetailsResponse } from 'types/load.types';
import { useDeliverLoad } from 'server-state/mutations/use-deliver-load';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import CancelLoadModal from 'components/modals/cancel-load-modal';

const LoadCreator: React.FC<{
  data?: SingleLoadDetailsResponse;
}> = ({ data }) => {
  const deliverModal = useModal();
  const deliverLoadRequest = useDeliverLoad();
  const { load_id } = useParams<{ load_id: string }>();
  const { t } = useTranslation();

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
          <CancelLoadModal load_id={load_id}>
            <Button buttonType="warning">{t('Cancel this load')}</Button>
          </CancelLoadModal>
        </LoadCardButtonWrapper>
      )}

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
