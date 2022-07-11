import { Button } from '@mui/material';
import Text from 'components/typography/text';
import styled from 'styled-components';
import { colors } from 'styles/variables';

export const SliderNavWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 138px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SliderButton = styled(Button)<{ disabled: boolean }>`
  width: 161px;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 18.5px 30px;
  border-radius: 8px;
  cursor: pointer;
  background: ${({ disabled }) =>
    disabled ? colors.dark_80 : colors.red_80} !important;
`;

export const PrevButton = styled(SliderButton)``;

export const NextButton = styled(SliderButton)``;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BolderText = styled(Text)`
  font-size: 28px;
  line-height: 24px;
  margin-bottom: 16px;
  color: ${(props) => props.theme.text.main_5};
`;
export const Description = styled(Text)`
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => props.theme.text.main_30};
`;
