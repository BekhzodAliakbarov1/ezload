import Text from 'components/typography/text';
import styled from 'styled-components';
import { colors } from 'styles/variables';

export const CoverageWrappper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 88px;
`;

export const TextBox = styled.div<{ align?: string }>`
  width: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;
  text-align: ${({ align }) => align ?? 'center'} !important;
  margin: 0 auto 62px auto;
  gap: 16px;
`;

export const BoldText = styled(Text)`
  font-size: 28px;
  line-height: 24px;
`;

export const StyledText = styled(Text)`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.25px;
  color: ${(props) => props.theme.text.main_70};
`;

export const Image = styled.img`
  width: 100%;
  max-width: 1290px;
`;
