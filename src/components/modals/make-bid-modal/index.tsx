import { Modal } from '@mui/material';
import Button from 'components/button/button';
import Input from 'components/input/input';
import Text from 'components/typography/text';
import { useModal } from 'hooks/use-modal';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCreateBid } from 'server-state/mutations/use-create-bid';
import {
  ModalButtonsWrapper,
  ModalWrapper,
  ChildrenWrapper,
} from './make-bid-modal.styles';

const MakeBidModal: React.FC<{
  load_id?: string;
  wanted_price?: number;
}> = ({ children, load_id, wanted_price }) => {
  const { close, isOpen, open } = useModal();
  const { t } = useTranslation();
  const createBidRequest = useCreateBid({ load_id });

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      price: { value: string };
    };
    createBidRequest.mutate(
      {
        price: target.price.value,
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
        <ModalWrapper onSubmit={submitHandler}>
          <Text className="header">{t('Make a bid')}</Text>
          <Text className="cost">
            {t('Customer’s suggestion')} {wanted_price} USD
          </Text>
          <Input name="price" placeholder={t('Your bid')} />
          <ModalButtonsWrapper>
            <Button aria-label="submit">{t('Submit')}</Button>
            <Button
              aria-label="cencel"
              type="button"
              onClick={close}
              buttonType="white"
            >
              {t('Cancel')}
            </Button>
          </ModalButtonsWrapper>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default MakeBidModal;
