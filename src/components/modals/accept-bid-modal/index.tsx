import { Modal } from '@mui/material';
import Button from 'components/button/button';
import Text from 'components/typography/text';
import { useModal } from 'hooks/use-modal';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAcceptBid } from 'server-state/queries/use-bid';
import { moneyFormatter } from 'utils/money-formatter';
import {
  ChildrenWrapper,
  ModalButtonsWrapper,
  ModalWrapper,
} from './accept-bid-modal.styles';

const AcceptBidModal: React.FC<{
  bid_id?: string;
  driver_name?: string;
  bidded_price?: number;
  currency: 'USD' | 'UZS' | 'RUB';
}> = ({
  bid_id,
  children,
  bidded_price = 0,
  driver_name,
  currency = 'USD',
}) => {
  const acceptBidRequest = useAcceptBid();
  const { close, isOpen, open } = useModal();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    acceptBidRequest.mutate(
      {
        bid_id,
      },
      {
        onSuccess() {
          navigate(-1);
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
            {t('Are you sure you want to accept this bid from ')} {driver_name}
            {t(' with the amount of ')}{' '}
            {moneyFormatter({ currency, number: bidded_price })} ?
          </Text>
          <ModalButtonsWrapper>
            <Button
              loading={acceptBidRequest.isLoading}
              aria-label="accept"
              onClick={handleClick}
            >
              {t('Accept')}
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

export default AcceptBidModal;
