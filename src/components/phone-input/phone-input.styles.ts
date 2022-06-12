import { Select } from '@mui/material';
import styled from 'styled-components';
import { colors } from 'styles/variables';

export const PhoneInputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  .MuiSelect-select {
    width: 120px;
    padding: 8px 8px 8px 16px !important;
    border: 0px none;
    display: flex;
    align-items: center;
  }

  svg {
    cursor: pointer;
  }
  p {
    letter-spacing: 0.15px;
  }
`;
export const CountryFlagWrapper = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
  overflow: hidden;
`;

export const CountryFlagImage = styled.div`
  width: 70px;
  height: 70px;
  background-repeat: no-repeat;
  position: absolute;
  top: 0px;
  left: 0px;
  transform: translate(-40%, -26%);
`;

export const StyledSelect = styled(Select)`
  && {
    width: 176px;
    border: none;
    border: 1px solid ${colors.dark_20};
  }
`;

// export const OptionWrapper = styled.div;
