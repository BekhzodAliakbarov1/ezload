import { IconButton } from '@mui/material';
import styled from 'styled-components';
import { colors } from 'styles/variables';

export const FooterWrapper = styled.div`
  width: 100%;
`;

export const FooterContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin: auto;
`;

export const FooterLeftContent = styled.div`
  background-color: ${(props) => props.theme.text.main_100};
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
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: ${(props) => props.theme.text.main_60};
  }
`;
export const FooterLeftContentLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 90px;
  margin-bottom: 135px;
`;
export const FooterLeftContentLinksBox = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 32px;
    letter-spacing: 0.15px;
    color: ${(props) => props.theme.text.main_10};
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
    /* identical to box height */

    letter-spacing: 0.5px;

    /* 3/Ezload Dark 40% */

    color: ${(props) => props.theme.text.main_40};
    :hover {
      color: ${(props) => props.theme.text.main_20};
    }
  }
`;

export const FooterRightContent = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.text.main_90};
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
