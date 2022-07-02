import React from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Text from 'components/typography/text';
import {
  DateInputComponentWrapper,
  StyledTextFiled,
} from './date-input.styles';
import { useData } from 'layouts/load-action-layout/load-action-layout.context';

export const DateRangePickerInput: React.FC<{
  type: 'pickup' | 'delivery';
  isEditing: boolean;
}> = ({ type, isEditing }) => {
  const { data, setValues } = useData();

  const handleStartDateChange = (newValue: Date | null) => {
    if (newValue) {
      setValues({
        ...data,
        dates: {
          ...data.dates,
          [type]: { ...data.dates[type], start: newValue },
        },
      });
    }
  };

  const handleEndDateChange = (newValue: Date | null) => {
    if (newValue) {
      setValues({
        ...data,
        dates: {
          ...data.dates,
          [type]: { ...data.dates[type], end: newValue },
        },
      });
    }
  };

  return (
    <DateInputComponentWrapper>
      <Text weight="500">From</Text>
      <DateTimePicker
        value={data.dates[type].start}
        onChange={handleStartDateChange}
        renderInput={(params) => <StyledTextFiled {...params} />}
        disableMaskedInput
        inputFormat="d-MMMM , HH:mm "
        disablePast={!isEditing}
      />
      <Text weight="500">To</Text>
      <DateTimePicker
        value={data.dates[type].end}
        onChange={handleEndDateChange}
        renderInput={(params) => <StyledTextFiled {...params} />}
        disableMaskedInput
        inputFormat="d-MMMM , HH:mm "
        disablePast={!isEditing}
        minDate={data.dates[type].start}
      />
    </DateInputComponentWrapper>
  );
};
