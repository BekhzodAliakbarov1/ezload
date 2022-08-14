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

const LoadCreator: React.FC<{
  data?: SingleLoadDetailsResponse;
}> = ({ data }) => {
  const cacelModal = useModal();
  const deliverModal = useModal();
  const deliverLoadRequest = useDeliverLoad();
  const { load_id } = useParams<{ load_id: string }>();

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
          <Text color="main_60">Load owner</Text>
          <Text weight="600">{data?.owner.first_name}</Text>
          <Text color="main_80" weight="600">
            +99894 555 66 66
          </Text>
        </LoadCardDataWrapper>
      </LoadCreatorWrapper>
      {data?.status === 2 && (
        <LoadCardButtonWrapper>
          <Button onClick={deliverModal.open}>Delivered this load</Button>
          <Button onClick={cacelModal.open} buttonType="warning">
            Cancel this load
          </Button>
        </LoadCardButtonWrapper>
      )}
      {/* CANCEL THE LOAD */}
      <Modal open={cacelModal.isOpen} onClose={cacelModal.close}>
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
      {/* DELIVER THE LOAD */}
      <Modal open={deliverModal.isOpen} onClose={deliverModal.close}>
        <DeliveredModalWrapper>
          <Text>
            Are you sure you want to complete the load? Make sure to deliver the
            load to the destination address. Also make sure to update the
            customer.
          </Text>
          <DeliveredModalButtonsWrapper>
            <Button onClick={deliveredClick} buttonType="contained">
              Submit
            </Button>
            <Button onClick={deliverModal.close} buttonType="white">
              Cancel
            </Button>
          </DeliveredModalButtonsWrapper>
        </DeliveredModalWrapper>
      </Modal>
    </>
  );
};

export default LoadCreator;
