import Text from 'components/typography/text';
import React from 'react';
import { LoadCardButtonWrapper } from './single-load-buttons.styles';
import { useNavigate, useParams } from 'react-router-dom';
import { SingleLoadResponse } from 'types/load.types';
import { useTranslation } from 'react-i18next';
import { useModal } from 'hooks/use-modal';
import ReviewDriverModal from 'components/modals/review-driver-modal';
import CancelDriverModal from 'components/modals/cancel-driver-bid-modal';
import DeletLoadModal from 'components/modals/delete-load-modal';

const SingleLoadButtons: React.FC<{
  load: SingleLoadResponse;
  status?: 1 | 2 | 3;
}> = ({ load, status }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const reviewDriverModal = useModal();
  const params = useParams() as { load_id?: string };

  const handleEdit = () => {
    navigate('/edit-load', {
      state: {
        type: 'EDIT',
        id: load.id ?? params.load_id,
      },
    });
  };

  return (
    <>
      {status === 1 && (
        <LoadCardButtonWrapper>
          <DeletLoadModal load_id={load.id ?? params.load_id}>
            <Text>{t('Delete load')}</Text>
          </DeletLoadModal>
          <Text onClick={handleEdit}>{t('Change details')}</Text>
        </LoadCardButtonWrapper>
      )}
      {status === 2 && (
        <CancelDriverModal
          accepted_bid={load.accepted_bid}
          driver_name={load.driver?.first_name}
          load_id={String(load.id ?? params.load_id)}
        >
          <LoadCardButtonWrapper>
            <Text>{t('Cancel the driver')}</Text>
          </LoadCardButtonWrapper>
        </CancelDriverModal>
      )}
      {status === 3 && (
        <ReviewDriverModal
          load_id={load.id ?? params.load_id}
          reviewee_id={load.driver?.id}
        >
          <LoadCardButtonWrapper>
            <Text onClick={reviewDriverModal.open}>
              {t('Review the driver')}
            </Text>
          </LoadCardButtonWrapper>
        </ReviewDriverModal>
      )}
    </>
  );
};

export default SingleLoadButtons;
