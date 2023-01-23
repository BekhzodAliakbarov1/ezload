import React from 'react';
import {
  LoadCardButtonWrapper,
  LoadCardDataWrapper,
  LoadCreatorWrapper,
} from './load-creator.styles';
import Avatar from 'components/avatar';
import Text from 'components/typography/text';
import Button from 'components/button/button';
import { SingleLoadDetailsResponse } from 'types/load.types';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import CancelLoadModal from 'components/modals/cancel-load-modal';
import DeliverLoadModal from 'components/modals/deliver-load-modal';

const LoadCreator: React.FC<{
  data?: SingleLoadDetailsResponse;
}> = ({ data }) => {
  const { load_id } = useParams<{ load_id: string }>();
  const { t } = useTranslation();

  return (
    <>
      <LoadCreatorWrapper>
        <Avatar sizes="96px" src={data?.owner.profile_picture?.file} />
        <LoadCardDataWrapper>
          <Text color="main_60">{t('Load owner')}</Text>
          <Text weight="600">{data?.owner.first_name}</Text>
          <Text color="main_80" weight="600">
            +{data?.owner.phone_number}
          </Text>
        </LoadCardDataWrapper>
      </LoadCreatorWrapper>
      {data?.status === 2 && (
        <LoadCardButtonWrapper>
          <DeliverLoadModal load_id={load_id}>
            <Button>{t('Delivered the load')}</Button>
          </DeliverLoadModal>
          <CancelLoadModal load_id={load_id}>
            <Button buttonType="warning">{t('Cancel this load')}</Button>
          </CancelLoadModal>
        </LoadCardButtonWrapper>
      )}
    </>
  );
};

export default LoadCreator;
