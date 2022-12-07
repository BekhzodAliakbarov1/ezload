import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Text from 'components/typography/text';
import {
  DateInputComponentWrapper,
  StyledTextFiled,
} from './date-input.styles';
import { useData } from 'layouts/load-action-layout/load-action-layout.context';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

export const DateRangePickerInput: React.FC<{
  type: 'pickup' | 'delivery';
  isEditing: boolean;
}> = ({ type, isEditing }) => {
  const { data, setValues } = useData();
  const { t } = useTranslation();

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
      <div>
        <Text weight="500">{t('From')}</Text>
        <DatePicker
          value={data.dates[type].start}
          onChange={handleStartDateChange}
          renderInput={(params) => <StyledTextFiled {...params} />}
          disableMaskedInput
          disablePast={!isEditing}
        />
      </div>
      <div>
        <Text weight="500">{t('To')}</Text>
        <DatePicker
          value={data.dates[type].end}
          onChange={handleEndDateChange}
          renderInput={(params) => <StyledTextFiled {...params} />}
          disableMaskedInput
          // inputFormat="d-MMMM , HH:mm "
          disablePast={!isEditing}
          minDate={data.dates[type].start}
        />
      </div>
    </DateInputComponentWrapper>
  );
};
