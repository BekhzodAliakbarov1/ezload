import styled from 'styled-components';
import { colors } from 'styles/variables';

export const DriverMainInfosWrapper = styled.div`
  width: 100%;
  max-width: 372px;
  max-height: fit-content;
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bg.main};
  box-shadow: 0px 1px 3px rgba(60, 181, 149, 0.12);
  border-radius: 4px;
  /* align-items: center; */
  > button {
    margin-top: 56px;
  }
`;
export const AvatarWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 48px;
  span {
    display: flex;
    gap: 12px;
  }
`;

export const DriversMainInfoDataWrapper = styled.div`
  width: 100%;
  padding-bottom: 33px;
  border-bottom: 1px solid ${colors.green_30};
  margin-bottom: 32px;
  .name {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 24px;
  }
  .weight_loads {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: ${(props) => props.theme.text.main_60};
    margin-bottom: 17px;
  }
  .number_loads {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: ${(props) => props.theme.text.main_60};
    margin-bottom: 32px;
  }
  .label_number {
    letter-spacing: 0.15px;
    color: ${(props) => props.theme.text.main_70};
  }
  .car_number {
    font-size: 18px;
    line-height: 32px;
  }
`;

export const DriversMainInfoLocationsWrapper = styled.div`
  margin-bottom: 73px;
  > p {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    > p {
      font-size: 18px;
      line-height: 32px;
    }
  }
`;

export const DriverMainInfoContactWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 17px;
  p {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
  }
  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    color: ${(props) => props.theme.text.main_100};
  }
`;

export const AcceptBidModalWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 56px 80px;
  background-color: ${colors.white};
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 515px;
  > p {
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 0.15px;
    margin-bottom: 48px;
  }
`;

export const ModalButtonsWrapper = styled.div`
  display: flex;
  width: fit-content;
  gap: 24px;
  margin: auto;
`;
