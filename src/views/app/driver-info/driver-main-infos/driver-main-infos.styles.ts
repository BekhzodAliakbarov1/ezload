import styled from 'styled-components';

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
  > button {
    margin-top: 56px;
  }
  @media (max-width: 800px) {
    max-width: 100%;
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
  border-bottom: 3px solid ${(props) => props.theme.text.main_5};
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
  .label {
    color: ${(props) => props.theme.text.main_70};
  }
`;

export const DriverMainInfoContactWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 26px;
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
  .number {
    color: ${(props) => props.theme.text_active.active};
  }
  .label {
    color: ${(props) => props.theme.text.main_70};
  }
`;
