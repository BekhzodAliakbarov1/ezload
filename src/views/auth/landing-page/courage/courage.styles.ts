import Text from 'components/typography/text';
import styled from 'styled-components';

export const CoverageWrappper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 88px;
  position: relative;
  @media (max-width: 800px) {
    padding-top: 0px;
  }
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
  @media (max-width: 800px) {
    font-size: 24px;
  }
`;
import img from 'assets/img/earth.png';

export const StyledText = styled(Text)`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.25px;
  color: ${(props) => props.theme.text.main_70};
`;

export const Image = styled.div`
  width: 100%;
  background-image: ${`url(${img})`};
  height: 500px;
  background-position: center;
  @media (max-width: 800px) {
    background-size: contain;
    height: 267px;
    background-repeat: no-repeat;
  }
  @media (max-width: 500px) {
    background-size: cover;
    height: 267px;
    background-repeat: no-repeat;
  }
`;

export const ImageWrapper = styled.img`
  position: absolute;
  bottom: -10px;
  left: 0px;
`;
