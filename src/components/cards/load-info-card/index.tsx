import Button from 'components/button/button';
import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SingleLoadDetailsResponse } from 'types/load.types';
import {
  LoadBidAndViewBox,
  LoadBidAndViewCountWrapper,
  LoadDescriptionWrapper,
  LoadInfoCardDataBox,
  LoadInfoCardDataSingleBox,
  LoadInfoCradWrapper,
} from './load-info-card.styles';

const LoadInfoCard: React.FC<{
  data: SingleLoadDetailsResponse;
}> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <LoadInfoCradWrapper>
      <Text weight="600">{t('Information about load')}</Text>
      <Button aria-label="status button" buttonType="warning" size="medium">
        {data.status === 1
          ? t('New')
          : data.status === 2
          ? t('On the way')
          : data.status === 3 && t('Delivered')}
      </Button>
      <LoadInfoCardDataBox>
        <LoadInfoCardDataSingleBox>
          <Text>{t('Load owner')}</Text>
          <Text color="main_100">{data.owner.first_name}</Text>
        </LoadInfoCardDataSingleBox>
        <LoadInfoCardDataSingleBox>
          <Text>{t('Load Weight')}</Text>
          <Text color="main_100">{data.weight} tonnes</Text>
        </LoadInfoCardDataSingleBox>
        <LoadInfoCardDataSingleBox>
          <Text>{t('Payment')}</Text>
          <Text color="main_100">
            {data.price} {data.currency ?? '-'}
          </Text>
        </LoadInfoCardDataSingleBox>
      </LoadInfoCardDataBox>
      <LoadDescriptionWrapper>
        <Text>{t('Description')}</Text>
        <Text color="main_100">
          {Boolean(data.description) ? data.description : t('No description')}
        </Text>
      </LoadDescriptionWrapper>
      <LoadBidAndViewCountWrapper>
        <LoadBidAndViewBox>
          <Text>{t('Bid count:')}</Text>
          <Text color="main_100">{data.bids_count}</Text>
        </LoadBidAndViewBox>
        <LoadBidAndViewBox>
          <Text>{t('View count:')}</Text>
          <Text color="main_100">{data.visits_count}</Text>
        </LoadBidAndViewBox>
      </LoadBidAndViewCountWrapper>
    </LoadInfoCradWrapper>
  );
};

export default LoadInfoCard;
