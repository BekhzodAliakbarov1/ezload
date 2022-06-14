import React from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Text from 'components/typography/text';
import {
  DateInputComponentWrapper,
  StyledTextFiled,
} from './date-input.styles';

export const DateRangePickerInput: React.FC<{ type: 'start' | 'end' }> = ({
  type,
}) => {
  const today = new Date();
  const tommorrow = new Date();
  if (type === 'start') {
    tommorrow.setDate(tommorrow.getDate() + 2);
  } else {
    today.setDate(today.getDate() + 10);
    tommorrow.setDate(tommorrow.getDate() + 12);
  }
  const [startDate, setStartDate] = React.useState<Date>(today);
  const [endDate, setEndDate] = React.useState<Date>(tommorrow);

  const handleStartDateChange = (newValue: Date | null) => {
    if (newValue) {
      setStartDate(newValue);
    }
  };

  const handleEndDateChange = (newValue: Date | null) => {
    if (newValue) {
      setEndDate(newValue);
    }
  };

  return (
    <DateInputComponentWrapper>
      <Text weight="500">From</Text>
      <DateTimePicker
        value={startDate}
        onChange={handleStartDateChange}
        renderInput={(params) => <StyledTextFiled {...params} />}
        inputFormat="dd-MMM, hh-mm"
        disablePast
      />
      <Text weight="500">To</Text>
      <DateTimePicker
        value={endDate}
        onChange={handleEndDateChange}
        renderInput={(params) => <StyledTextFiled {...params} />}
        inputFormat="dd-MMM, hh-mm"
        disablePast
        minDate={startDate}
      />
    </DateInputComponentWrapper>
  );
};
