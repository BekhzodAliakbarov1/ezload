import { DateRangePickerInput } from 'components/input/date-input';
import Text from 'components/typography/text';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  LoadDateTimeWrapper,
  DateSelectBox,
  DateFromToWrapper,
} from './load-date-time.styles';

const LoadDateTime: React.FC<{ isEditing: boolean }> = ({ isEditing }) => {
  const { t } = useTranslation();
  return (
    <LoadDateTimeWrapper>
      <Text color="main_80" weight="700">
        {t('Load date & time')}
      </Text>
      <DateSelectBox>
        <Text size="md" weight="500">
          {t('Pickup date')}
        </Text>
        <DateFromToWrapper>
          <DateRangePickerInput isEditing={isEditing} type="pickup" />
        </DateFromToWrapper>
      </DateSelectBox>
      <DateSelectBox>
        <Text size="md" weight="500">
          {t('Delivery date')}
        </Text>
        <DateFromToWrapper>
          <DateRangePickerInput isEditing={isEditing} type="delivery" />
        </DateFromToWrapper>
      </DateSelectBox>
    </LoadDateTimeWrapper>
  );
};

export default LoadDateTime;
