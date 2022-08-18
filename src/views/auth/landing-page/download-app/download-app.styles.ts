import Text from 'components/typography/text';
import styled from 'styled-components';

export const DownloadAppWrap = styled.div`
  width: 100%;
  display: flex;
  height: 494px;
  align-items: center;
  justify-content: center;
  gap: 70px;
  position: relative;
  background-color: ${(props) => props.theme.bg.main};
  @media (max-width: 800px) {
    height: 100%;
    gap: 0;
    flex-direction: column;
    margin-bottom: 100px;
  }
`;

export const Image = styled.img`
  position: relative;
  bottom: 180px;
  left: 2%;
  width: 473px;
  @media (max-width: 800px) {
    bottom: 120px;
    width: 329px;
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;
  gap: 32px;
`;

export const BigRectangle = styled.div`
  border: 15px solid #c4e9df;
  position: absolute;
  width: 131px;
  height: 125px;
  top: -140px;
  right: 20px;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  padding: 0px 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: left;
  /* align-items: center; */
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const BoldText = styled(Text)`
  font-size: 28px;
  line-height: 24px;
  @media (max-width: 800px) {
    font-size: 24px;
  }
`;

export const StyledText = styled(Text)`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.25px;
  color: ${(props) => props.theme.text.main_70};
`;

export const SmallImagesWrappaer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
