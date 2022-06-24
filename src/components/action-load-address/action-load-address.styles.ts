import { IconButton, Select } from '@mui/material';
import styled from 'styled-components';
import { colors } from 'styles/variables';

export const ActionLoaddAddressWrapper = styled.div`
  width: 100%;
  text-align: left;

  height: 100%;
  > p:nth-child(1) {
    margin-bottom: 20px;
  }
`;

export const StyledSelectInput = styled(Select)`
  border: 1px solid ${(props) => props.theme.text.main_20};
  border-radius: 2px;
  height: 46px;
  text-align: left;
  max-width: 353px;
`;
export const ChooseAndCreateTextWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const StyledText = styled.h3`
  font-weight: 600;
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: ${colors.red_90};
  margin: 24px 0px;
  cursor: pointer;
  text-align: left;
`;

export const ClearTextWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-left: 20%;
  cursor: pointer;
  align-items: center;
  p {
    font-size: 14px;
  }
  svg {
    margin-right: 4px;
  }
`;

export const ActionLoadInputAndMapWrapper = styled.div`
  display: flex;
  width: 100%;

  gap: 31px;
`;

export const ActionLoadInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  max-width: 353px;
`;

export const ActionLoadMapContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ActionLoadMapWrapper = styled.div`
  width: 100%;
  height: 286px;
`;

export const SaveAddressWrapper = styled.div`
  width: 320px;
  padding: 13px 0px;
  display: flex;
  align-items: center;
  margin-top: 11px;
  > div {
    width: 24px;
    height: 24px;
    border: 1px solid red;
  }
  p {
    font-size: 16px;
    line-height: 20px;
    margin-left: 8px;
  }
  button {
    padding: 0px;
  }
`;

export const StyledIconButton = styled(IconButton)`
  width: fit-content;
  height: fit-content;
`;
