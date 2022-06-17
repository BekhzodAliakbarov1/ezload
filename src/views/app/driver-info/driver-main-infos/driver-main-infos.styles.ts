import styled from 'styled-components';
import { colors } from 'styles/variables';

export const DriverMainInfosWrapper = styled.div`
  width: 100%;
  max-width: 372px;
  max-height: fit-content;
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.green_5};
  box-shadow: 0px 1px 3px rgba(60, 181, 149, 0.12);
  border-radius: 4px;
  /* align-items: center; */
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
    color: ${colors.dark_90};
  }
  .weight_loads {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: ${colors.dark_60};
    margin-bottom: 17px;
  }
  .number_loads {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: ${colors.dark_60};
    margin-bottom: 32px;
  }
  .label_number {
    letter-spacing: 0.15px;
    color: ${colors.dark_70};
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
    color: ${colors.dark_70};
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    > p {
      font-size: 18px;
      line-height: 32px;
      color: ${colors.dark_80};
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
    color: ${colors.dark_70};
  }
  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    color: ${colors.dark_100};
  }
`;
