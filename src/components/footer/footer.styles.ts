import { IconButton } from '@mui/material';
import styled from 'styled-components';
import { colors } from 'styles/variables';
import img from 'assets/img/footer_bg.png';

export const FooterWrapper = styled.div`
  width: 100%;
`;

export const FooterContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const FooterLeftContent = styled.div`
  background-color: ${`${colors.dark_100}`};
  width: 100%;
  max-width: 515px;
  display: flex;
  padding-top: 94px;
  padding-bottom: 50px;
  padding-left: 75px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  > p {
    text-align: left;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: ${(props) => props.theme.text.main_60};
  }
  @media (max-width: 1024px) {
    max-width: 100vw;
    padding-top: 48px;
    padding-left: 24px;
  }
`;
export const FooterLeftContentLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 90px;
  margin-bottom: 135px;
  @media (max-width: 1024px) {
    margin-bottom: 30px;
    gap: 20px;
  }
`;
export const FooterLeftContentLinksBox = styled.div`
  display: flex;
  flex-direction: column;
  p {
    text-align: left;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 32px;
    letter-spacing: 0.15px;
    color: ${(props) => props.theme.text.main_10};
  }
  @media (max-width: 800px) {
    p {
      font-size: 14px;
    }
  }
`;
export const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  a {
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-align: left;
    /* identical to box height */

    letter-spacing: 0.5px;

    /* 3/Ezload Dark 40% */

    color: ${(props) => props.theme.text.main_40};
    :hover {
      color: ${(props) => props.theme.text.main_20};
    }
  }
  @media (max-width: 800px) {
    a {
      font-size: 12px;
    }
  }
`;

export const FooterRightContent = styled.div`
  height: 100%;
  background-image: ${`url(${img})`};
  background-position: bottom;
  background-repeat: no-repeat;
  background-color: ${`${colors.dark_90}`};
  background-size: cover;
  width: 100%;
  height: 100%;
  max-width: 925px;
  display: flex;
  padding-top: 94px;
  padding-left: 110px;
  padding-bottom: 309px;
  align-items: flex-start;
  gap: 80px;
  position: relative;
  @media (max-width: 1024px) {
    max-width: 100vw;
    padding-top: 40px;
    padding-left: 24px;
    padding-bottom: 72px;
    flex-direction: column;
    gap: 32px;
  }
`;

export const FooterRightContentItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.15px;
    margin-bottom: 8px;
    color: ${(props) => props.theme.text.main_30};
  }
  h1 {
    font-weight: 700;
    font-size: 27px;
    line-height: 32px;
    letter-spacing: 0.15px;
    color: ${(props) => props.theme.text.main_10};
  }
  @media (max-width: 1024px) {
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 13px;
    }
  }
`;

export const FooterSocialLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

export const StyledIconButton = styled(IconButton)`
  && {
    width: 27px;
    height: 27px;
    padding: 0px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const FooterButton = styled.div`
  position: absolute;
  bottom: 57px;
  right: 94px;
  width: 38px;
  height: 38px;
  cursor: pointer;
  border: 2.92308px solid ${colors.red_90};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    right: 40px;
    bottom: 40px;
  }
`;

export const StyledTopButtonIcon = styled(IconButton)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0px;
  }
`;
