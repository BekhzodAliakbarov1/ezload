import Text from 'components/typography/text';
import React, { useState } from 'react';
import {
  LoadBidRatingWrapper,
  LoadBidsSimpleModalWrapper,
  LoadBitsModalButtonsWrapper,
  LoadCardButtonWrapper,
  ModalButtonsBox,
  ModalInputsWrapper,
  ModalStyledTextFiled,
  ModalWrapper,
} from './single-load-buttons.styles';
import { useNavigate, useParams } from 'react-router-dom';
import { SingleLoadResponse } from 'types/load.types';
import { useTranslation } from 'react-i18next';
import { useModal } from 'hooks/use-modal';
import { Modal, Rating } from '@mui/material';
import Button from 'components/button/button';
import Input from 'components/input/input';
import FilledStarIcon from 'components/icons/filled-star.icon';

const SingleLoadButtons: React.FC<{
  load: SingleLoadResponse;
  status?: 1 | 2 | 3;
}> = ({ load, status }) => {
  const [cancelDriverSteps, setCancelDriverSteps] = useState<1 | 2>(1);
  const [rating, setRating] = useState(1);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { load_id } = useParams<{ load_id: string }>();
  const deleteModal = useModal();
  const cancelDriverModal = useModal();
  const reviewDriverModal = useModal();

  const handleEdit = () => {
    navigate('/edit-load', {
      state: {
        type: 'EDIT',
        data: { ...load, id: load_id },
      },
    });
  };
  const handleDelete = () => {
    console.log('delete handler');
  };

  return (
    <>
      {status === 1 && (
        <LoadCardButtonWrapper>
          <Text onClick={deleteModal.open}>{t('Delete Load')}</Text>
          <Text onClick={handleEdit}>{t('Change details')}</Text>
        </LoadCardButtonWrapper>
      )}
      {status === 2 && (
        <LoadCardButtonWrapper>
          <Text onClick={cancelDriverModal.open}>{t('Cancel the driver')}</Text>
        </LoadCardButtonWrapper>
      )}
      {status === 3 && (
        <LoadCardButtonWrapper>
          <Text onClick={reviewDriverModal.open}>{t('Review the driver')}</Text>
        </LoadCardButtonWrapper>
      )}
      {/* delete load modal */}
      <Modal open={deleteModal.isOpen} onClose={deleteModal.close}>
        <ModalWrapper>
          <Text color="main_100">
            {t('Are you sure to delete? Actions cannot be undone')}
          </Text>
          <ModalButtonsBox>
            <Button aria-label="delete" onClick={handleDelete}>
              {t('Yes, delete')}
            </Button>
            <Button aria-label="cancel" onClick={deleteModal.close}>
              {t('Cancel')}
            </Button>
          </ModalButtonsBox>
        </ModalWrapper>
      </Modal>

      {/* cancel driver modal */}
      <Modal open={cancelDriverModal.isOpen} onClose={cancelDriverModal.close}>
        <LoadBidsSimpleModalWrapper
          type={cancelDriverSteps === 1 ? 'small' : 'big'}
        >
          {cancelDriverSteps === 1 && (
            <>
              <Text>{t('Are you sure you want to cancel ')} driver“</Text>
              <LoadBitsModalButtonsWrapper>
                <Button
                  aria-label="submit"
                  onClick={() => setCancelDriverSteps(2)}
                >
                  {t('Submit')}
                </Button>
                <Button
                  aria-label="cancel"
                  buttonType="white"
                  onClick={cancelDriverModal.close}
                >
                  {t('Cancel')}
                </Button>
              </LoadBitsModalButtonsWrapper>
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
              <LoadBitsModalButtonsWrapper>
                <Button aria-label="submit" onClick={() => console.log(1221)}>
                  {t('Submit')}
                </Button>
                <Button
                  aria-label="ccancel"
                  buttonType="white"
                  onClick={() => {
                    cancelDriverModal.close();
                    setCancelDriverSteps(1);
                  }}
                >
                  {t('Cancel')}
                </Button>
              </LoadBitsModalButtonsWrapper>
            </>
          )}
        </LoadBidsSimpleModalWrapper>
      </Modal>
      {/* review driver modal */}
      <Modal open={reviewDriverModal.isOpen} onClose={reviewDriverModal.close}>
        <LoadBidsSimpleModalWrapper type={'big'}>
          <Text>{t('Rate your experience')}</Text>
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
              placeholder={t('Please be honest to leave your feedback')}
            />
          </ModalInputsWrapper>
          <LoadBitsModalButtonsWrapper>
            <Button
              aria-label="submit"
              onClick={() => console.log('review driver')}
            >
              {t('Submit')}
            </Button>
            <Button
              aria-label="cancel"
              buttonType="white"
              onClick={reviewDriverModal.close}
            >
              {t('Cancel')}
            </Button>
          </LoadBitsModalButtonsWrapper>
        </LoadBidsSimpleModalWrapper>
      </Modal>
    </>
  );
};

export default SingleLoadButtons;
