import { Modal, Rating } from '@mui/material';
import Button from 'components/button/button';
import FilledStarIcon from 'components/icons/filled-star.icon';
import Input from 'components/input/input';
import Text from 'components/typography/text';
import React, { useState } from 'react';
import {
  LoadBidRatingWrapper,
  LoadBidsSimpleModalWrapper,
  LoadBitsModalButtonsWrapper,
  ModalInputsWrapper,
  ModalStyledTextFiled,
} from './load-bids-modal.styles';

const LoadBidsModals: React.FC<{
  loadType: 'NEW' | 'BIDDED' | 'ON_THE_WAY';
  close: () => void;
  isOpen: boolean;
}> = ({ loadType, close, isOpen }) => {
  const [cancelDriverSteps, setCancelDriverSteps] = useState<1 | 2 | 3>(1);
  const [rating, setRating] = useState(1);

  const handleSubmit = () => {
    // last submit handler
  };
  const cancelHandler = () => {
    setCancelDriverSteps(1);
    close();
  };

  return (
    <>
      {/* cancel driver modal */}
      <Modal open={loadType === 'ON_THE_WAY' && isOpen} onClose={close}>
        <LoadBidsSimpleModalWrapper
          type={cancelDriverSteps === 1 ? 'small' : 'big'}
        >
          {cancelDriverSteps === 1 && (
            <>
              <Text>
                Are you sure you want to cancel “Driver name” assigned to the
                order ID: 123456789?
              </Text>
              <LoadBitsModalButtonsWrapper>
                <Button onClick={() => setCancelDriverSteps(2)}>Submit</Button>
                <Button buttonType="white" onClick={cancelHandler}>
                  Cancel
                </Button>
              </LoadBitsModalButtonsWrapper>
            </>
          )}
          {cancelDriverSteps === 2 && (
            <>
              <Text>Provide reason</Text>
              <ModalInputsWrapper>
                <Input placeholder="Other" />
                <ModalStyledTextFiled
                  multiline
                  fullWidth
                  placeholder="Please, provide reason and explain of cancelling the load"
                />
              </ModalInputsWrapper>
              <LoadBitsModalButtonsWrapper>
                <Button onClick={() => setCancelDriverSteps(3)}>Submit</Button>
                <Button buttonType="white" onClick={cancelHandler}>
                  Cancel
                </Button>
              </LoadBitsModalButtonsWrapper>
            </>
          )}
          {cancelDriverSteps === 3 && (
            <>
              <Text>Rate your experience</Text>
              <LoadBidRatingWrapper>
                <Rating
                  value={rating}
                  onChange={(e, newValue) => setRating(newValue ?? rating)}
                  icon={<FilledStarIcon size="40" fill="#76CBB4" />}
                  emptyIcon={<FilledStarIcon size="40" fill="#EBF8F4" />}
                />
              </LoadBidRatingWrapper>
              <ModalInputsWrapper>
                <ModalStyledTextFiled
                  multiline
                  placeholder="Please be honest to leave your feedback"
                />
              </ModalInputsWrapper>
              <LoadBitsModalButtonsWrapper>
                <Button onClick={handleSubmit}>Submit</Button>
                <Button buttonType="white" onClick={cancelHandler}>
                  Cancel
                </Button>
              </LoadBitsModalButtonsWrapper>
            </>
          )}
        </LoadBidsSimpleModalWrapper>
      </Modal>
      {/* Delete load modal */}
      <Modal open={loadType === 'NEW' && isOpen} onClose={close}>
        <LoadBidsSimpleModalWrapper type="small">
          <Text>Are you sure to delete? Actions cannot be undone</Text>
          <LoadBitsModalButtonsWrapper>
            <Button buttonType="warning">Yes, delete</Button>
            <Button buttonType="white" onClick={close}>
              Cancel
            </Button>
          </LoadBitsModalButtonsWrapper>
        </LoadBidsSimpleModalWrapper>
      </Modal>
    </>
  );
};

export default LoadBidsModals;
