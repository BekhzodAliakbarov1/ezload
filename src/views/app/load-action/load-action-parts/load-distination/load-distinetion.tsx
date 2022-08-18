import DistanceIcon from 'components/icons/distance.icon';
import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DistanceSizeBox, DistinationWrapper } from './load-distination.styles';

const LoadDistination = () => {
  const { t } = useTranslation();
  return (
    <DistinationWrapper>
      <Text color="main_80" weight="700">
        {t('Distance to the Destination ')}
      </Text>
      <DistanceSizeBox>
        <DistanceIcon />
        <Text weight="500">894 km</Text>
      </DistanceSizeBox>
    </DistinationWrapper>
  );
};

export default LoadDistination;
