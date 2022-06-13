import React from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Text from 'components/typography/text';
import {
  DateInputComponentWrapper,
  StyledTextFiled,
} from './date-input.styles';

export const DateRangePickerInput = () => {
  const today = new Date();
  const tommorrow = new Date();
  tommorrow.setDate(today.getDate() + 1);
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
        // label="Date&Time picker"
        value={startDate}
        onChange={handleStartDateChange}
        renderInput={(params) => <StyledTextFiled {...params} />}
        inputFormat="dd-MMM, hh-mm"
        disablePast
      />
      <Text weight="500">To</Text>
      <DateTimePicker
        // label="Date&Time picker"
        value={endDate}
        onChange={handleEndDateChange}
        renderInput={(params) => <StyledTextFiled {...params} />}
        inputFormat="dd-MMM, hh-mm"
        disablePast
      />
    </DateInputComponentWrapper>
  );
};
