import styled from 'styled-components';
import { colors } from 'styles/variables';

export const TruckInfoChangeWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  flex-direction: column;
`;

export const TruckLabelWrapper = styled.div`
  width: auto;
  display: flex;
  gap: 24px;
  align-items: center;
  > p {
    font-size: 24px;
    line-height: 24px;
    /* identical to box height, or 100% */

    /* 3/Ezload Dark 90% */

    color: ${colors.dark_90};
  }
`;

export const TruckEditButtonWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  p {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    text-decoration-line: underline;
    color: ${colors.dark_70};
    cursor: pointer;
  }
`;

export const TruckMainInfosWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TruckInfoChangeInput = styled.div`
  width: 100%;
  max-width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 17px;
  > p:nth-child(1) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: ${colors.dark_40};
  }
  > p:nth-child(2) {
    font-size: 18px;
    line-height: 32px;
    /* identical to box height, or 178% */

    /* 3/Ezload Dark 100% */

    color: ${colors.dark_100};
  }
`;

export const TruckButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
