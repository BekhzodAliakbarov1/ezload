import { Modal, Rating } from '@mui/material';
import Button from 'components/button/button';
import FilledStarIcon from 'components/icons/filled-star.icon';
import Input from 'components/input/input';
import Text from 'components/typography/text';
import React, { useState } from 'react';
import { useDeleteLoad } from 'server-state/mutations/use-load';
import { useCancelBid } from 'server-state/queries/use-bid';
import { SingleLoadDetailsResponse } from 'types/load.types';
import {
  LoadBidRatingWrapper,
  LoadBidsSimpleModalWrapper,
  LoadBitsModalButtonsWrapper,
  ModalInputsWrapper,
  ModalStyledTextFiled,
} from './load-bids-modal.styles';
import { useParams } from 'react-router-dom';

const LoadBidsModals: React.FC<{
  close: () => void;
  isOpen: boolean;
  data?: SingleLoadDetailsResponse;
}> = ({ close, isOpen, data }) => {
  const { load_id } = useParams<{
    load_id: string;
  }>();
  const [cancelDriverSteps, setCancelDriverSteps] = useState<1 | 2 | 3>(1);
  const [rating, setRating] = useState(1);
  const deleteLoadRequest = useDeleteLoad();
  const cancelBidRequest = useCancelBid({
    bid_id: data?.accepted_bid,
    load_id,
  });

  const handleSubmit = () => {
    cancelBidRequest.refetch();
    setCancelDriverSteps(1);
    close();
  };
  const cancelHandler = () => {
    setCancelDriverSteps(1);
    close();
  };

  const deleteLoad = () => deleteLoadRequest.mutate({ id: load_id });

  return (
    <>
      {/* cancel driver modal */}
      <Modal open={data?.status === 2 && isOpen} onClose={close}>
        <LoadBidsSimpleModalWrapper
          type={cancelDriverSteps === 1 ? 'small' : 'big'}
        >
          {cancelDriverSteps === 1 && (
            <>
              <Text>
                Are you sure you want to cancel “{data?.driver?.first_name}”
                assigned to the order ID: {data?.accepted_bid}?
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
      <Modal open={data?.status === 1 && isOpen} onClose={close}>
        <LoadBidsSimpleModalWrapper type="small">
          <Text>Are you sure to delete? Actions cannot be undone</Text>
          <LoadBitsModalButtonsWrapper>
            <Button buttonType="warning" onClick={deleteLoad}>
              Yes, delete
            </Button>
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
