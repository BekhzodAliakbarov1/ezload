import React from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Text from 'components/typography/text';
import {
  DateInputComponentWrapper,
  StyledTextFiled,
} from './date-input.styles';

export const DateRangePickerInput = () => {
  const [value, setValue] = React.useState<Date | null>(new Date());
  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <DateInputComponentWrapper>
      <Text weight="500">From</Text>
      <DateTimePicker
        // label="Date&Time picker"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <StyledTextFiled {...params} />}
        inputFormat="dd-MMM, hh-mm"
        disablePast
      />
      <Text weight="500">To</Text>
      <DateTimePicker
        // label="Date&Time picker"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <StyledTextFiled {...params} />}
        inputFormat="dd-MMM, hh-mm"
        disablePast
      />
    </DateInputComponentWrapper>
  );
};
