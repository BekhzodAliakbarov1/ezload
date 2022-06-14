import Text from 'components/typography/text';
import styled from 'styled-components';
import { colors } from 'styles/variables';

export const LoadCardWrapper = styled.div`
  background-color: ${colors.green_5};
  border-radius: 8px;
  width: 100%;
  max-width: 370px;
  padding: 24px 32px;
  min-width: 350px;
`;

export const LoadCarLocationBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  span {
    width: 1px;
    height: 106px;
    border-left: 1px dashed ${colors.green_50};
  }
`;

export const LoadCardSvgDistanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
`;

export const LoadCardSvgWrapper = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${colors.green_100};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadCardLocationInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  p:nth-child(2) {
    margin-bottom: 4px;
    line-height: 20px;
    letter-spacing: 0.15px;
  }
  p:nth-child(3) {
    margin-bottom: 12px;
    line-height: 20px;
    letter-spacing: 0.15px;
  }
  p:nth-child(4) {
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.5px;
    color: ${colors.dark_70};
    margin-bottom: 4px;
  }
  p:nth-child(5) {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: ${colors.dark_70};
  }
`;

export const LoadCardPickupDeliverBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const GreenText = styled(Text)`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.25px;
  color: ${colors.green_100};
  margin-bottom: 4px;
`;

export const LoadCardBottomSideWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
`;

export const LoadCardDistanceSizeBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 18px;
  > p {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const LoadBidCountWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  p {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.25px;
    color: ${colors.dark_70};
  }
`;

export const LoadCardButtonWrapper = styled.div`
  width: 100%;
  max-width: 221px;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.dark_60};
  padding: 8px 16px;
  border-radius: 2px;
  p {
    font-size: 13px;
    line-height: 16px;
    color: ${colors.white};
    cursor: pointer;
  }
`;

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 644px;
  height: 228px;
  padding: 56px 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  border: none;
  outline: none;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: ${colors.dark_100};
    margin-bottom: 48px;
  }
`;

export const ModalButtonsBox = styled.div`
  display: flex;
  gap: 24px;
  margin: auto;
  button:nth-child(1) {
    background-color: ${colors.red_100};
    :hover {
      background-color: ${colors.red_80};
    }
  }
  button:nth-child(2) {
    background-color: ${colors.white};
    color: ${colors.dark_70};
    :hover {
      background-color: ${colors.dark_5};
    }
  }
`;
