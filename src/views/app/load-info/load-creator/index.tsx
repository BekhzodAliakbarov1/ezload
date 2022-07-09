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
} from './load-creator.styles';
import Avatar from 'components/avatar';
import Text from 'components/typography/text';
import Button from 'components/button/button';
import { useModal } from 'hooks/use-modal';
import { Modal } from '@mui/material';
import Input from 'components/input/input';

const LoadCreator: React.FC<{
  status?: 1 | 2 | 3;
}> = ({ status }) => {
  const { close, isOpen, open } = useModal();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // for fun
    close();
  };

  return (
    <>
      <LoadCreatorWrapper>
        <Avatar sizes="96px" src={ProfileImg} />
        <LoadCardDataWrapper>
          <Text color="main_60">Load owner</Text>
          <Text weight="600">Asror Namozov</Text>
          <Text color="main_80" weight="600">
            +99894 555 66 66
          </Text>
        </LoadCardDataWrapper>
      </LoadCreatorWrapper>
      {status === 2 && (
        <LoadCardButtonWrapper>
          <Button>Delivered the load</Button>
          <Button onClick={open} buttonType="warning">
            Cancel this load
          </Button>
        </LoadCardButtonWrapper>
      )}
      <Modal open={isOpen} onClose={close}>
        <LoadCancelModalWrapper onSubmit={handleSubmit}>
          <Text className="header">
            Are you sure you want to cancel the load?{' '}
          </Text>
          <ModalInputsWrapper>
            <Input placeholder="Other" />
            <ModalStyledTextFiled
              multiline
              fullWidth
              placeholder="Please, provide reason and explain of cancelling the load"
            />
          </ModalInputsWrapper>
          <ModalButtonsWrapper>
            <Button>Submit</Button>
            <Button onClick={close} type="button" buttonType="white">
              Cancel
            </Button>
          </ModalButtonsWrapper>
        </LoadCancelModalWrapper>
      </Modal>
    </>
  );
};

export default LoadCreator;
