import Button from 'components/button/button';
import Text from 'components/typography/text';
import styled from 'styled-components';
import { colors } from 'styles/variables';

export const IntroductionWrapper = styled.div`
  width: 150%;
  margin: 0 auto 0 auto;
  position: absolute;
  right: 0;
  top: 350px;
  transform: translate(16.5%, 0%);
  background-color: ${colors.green_5};
  z-index: 10;
  padding: 51px 0;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &::after {
    content: '';
    width: 45%;
    border-bottom: 2px dashed ${colors.green_20};
    height: 2px;
  }
  @media (max-width: 576px) {
    padding: 51px 80px;
  }
`;

export const BoldText = styled(Text)`
  font-size: 36px;
  line-height: 56px;
  font-weight: 800;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
  @media (max-width: 576px) {
    font-size: 24px;
    max-width: 350px;
    line-height: 28px;
    word-wrap: break-word;
  }
`;

export const Paragraph = styled(Text)`
  font-weight: 500;
  font-size: 19px;
  line-height: 20px;
  color: ${(props) => props.theme.text.main_70};
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 576px) {
    font-size: 16px;
    line-height: 20px;
    max-width: 400px;
    word-wrap: break-word;
  }
`;

export const CreateLoadBtn = styled(Button)`
  margin: 47px 0 107px 0 !important;
  width: 230.5px;
`;
