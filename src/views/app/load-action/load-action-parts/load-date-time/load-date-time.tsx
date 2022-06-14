import { DateRangePickerInput } from 'components/input/date-input';
import Text from 'components/typography/text';
import React from 'react';
import {
  LoadDateTimeWrapper,
  DateSelectBox,
  DateFromToWrapper,
} from './load-date-time.styles';

const LoadDateTime = () => {
  return (
    <LoadDateTimeWrapper>
      <Text weight="700">Load date & time</Text>
      <DateSelectBox>
        <Text size="md" weight="500">
          Pickup date
        </Text>
        <DateFromToWrapper>
          <DateRangePickerInput type="start" />
        </DateFromToWrapper>
      </DateSelectBox>
      <DateSelectBox>
        <Text size="md" weight="500">
          Delivery date
        </Text>
        <DateFromToWrapper>
          <DateRangePickerInput type="end" />
        </DateFromToWrapper>
      </DateSelectBox>
    </LoadDateTimeWrapper>
  );
};

export default LoadDateTime;
