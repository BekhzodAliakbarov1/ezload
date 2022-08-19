import Button from 'components/button/button';
import styled from 'styled-components';
import { colors } from 'styles/variables';
import Container from 'wrappers/container/container';

export const DriverListWrapper = styled.div`
  width: 100%;
  background: ${colors.dark_90};
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 35px;
  align-items: center;
  flex-wrap: wrap;
  margin: 88px auto 0px auto;
  width: fit-content;
  @media (max-width: 800px) {
    margin: 40px 0px 40px 0px;
  }
`;

export const StyledContainer = styled(Container)`
  && {
    .timeline-icon {
      width: 12px;
      height: 12px;
      margin: 0 16px;
      color: transparent;
      margin: 0 16px;
      font-size: 2px;
      padding: 0 4.25px;
      border-radius: 50%;
      cursor: pointer;
      background: ${colors.green_20};
    }

    .timeline-icon-active {
      background: ${colors.green_100};
      width: 12px;
      height: 12px;
      opacity: 1;
    }
    /* it remove component which is inside slider component in this folder */
    .mobile {
      display: none;
    }
    @media (max-width: 800px) {
      .desktop {
        display: none;
      }
      .mobile {
        display: block;
      }
    }
  }
`;

export const ViewButton = styled(Button)`
  && {
    margin: 72px auto 100px auto;
    width: fit-content;
    font-size: 14px;
    align-items: center;
    line-height: 18px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    @media (max-width: 800px) {
      margin: 40px auto 100px auto;
    }
  }
`;

export const Stick = styled.div`
  padding: 88px auto;
  border-bottom: 2px dashed ${colors.green_20};
  @media (max-width: 800px) {
    display: none;
  }
`;

export const MobileDriverCardWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  margin: auto;
  margin-bottom: 56px;
  margin-top: 40px;
`;
