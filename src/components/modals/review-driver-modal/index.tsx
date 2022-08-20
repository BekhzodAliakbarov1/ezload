import { Modal, Rating } from '@mui/material';
import Button from 'components/button/button';
import FilledStarIcon from 'components/icons/filled-star.icon';
import Text from 'components/typography/text';
import { useModal } from 'hooks/use-modal';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCreateReview } from 'server-state/mutations/use-create-review';
import {
  ChildrenWrapper,
  RatingWrapper,
  ModalWrapper,
  ModalButtonsWrapper,
  ModalInputsWrapper,
  ModalStyledTextFiled,
} from './review-driver-moda.styles';

const ReviewDriverModal: React.FC<{
  load_id?: number;
  reviewee_id?: string;
}> = ({ children, load_id, reviewee_id }) => {
  const { t } = useTranslation();
  const { close, isOpen, open } = useModal();
  const [rating, setRating] = useState(1);
  const [feedback, setFeedback] = useState<string>('');
  const createReviewRequest = useCreateReview();

  const handleReviewDriver = () => {
    createReviewRequest.mutate(
      {
        feedback,
        load: load_id,
        rate: rating,
        reviewee: reviewee_id,
      },
      {
        onSettled() {
          close();
        },
      }
    );
  };

  return (
    <>
      <ChildrenWrapper onClick={open}>{children}</ChildrenWrapper>
      <Modal open={isOpen} onClose={close}>
        <ModalWrapper type={'big'}>
          <Text>{t('Rate your experience')}</Text>
          <RatingWrapper>
            <Rating
              value={rating}
              onChange={(e, newValue) => setRating(newValue ?? rating)}
              icon={<FilledStarIcon size="40" fill="#76CBB4" />}
              emptyIcon={<FilledStarIcon size="40" fill="#EBF8F4" />}
            />
          </RatingWrapper>
          <ModalInputsWrapper>
            <ModalStyledTextFiled
              multiline
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder={t('Please be honest to leave your feedback')}
            />
          </ModalInputsWrapper>
          <ModalButtonsWrapper>
            <Button
              loading={createReviewRequest.isLoading}
              aria-label="submit"
              onClick={handleReviewDriver}
            >
              {t('Submit')}
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

export default ReviewDriverModal;
