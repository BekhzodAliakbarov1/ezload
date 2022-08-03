import Text from 'components/typography/text';
import styled from 'styled-components';
import { colors } from 'styles/variables';

export const DriverSignInFourthStepWrapper = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FourthStepDataWrapper = styled.div`
  width: 100%;
  max-width: 460px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > p {
    font-size: 24px;
    margin-bottom: 32px;
  }
  form {
    display: flex;
    align-items: center;
  }
`;

export const FourthStepInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
  > p {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.25px;
  }
`;

export const FourthStepNavigateBack = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  > p {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: ${(props) => props.theme.text.main_70};
  }
`;

export const FourthStepInputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
  input {
    width: 100%;
  }
  div {
    width: 100%;
    display: flex;
    gap: 17px;
    > button {
      height: 47px;
      width: 47px;
      min-width: 47px;
      padding: 0px !important;
    }
  }
`;

export const StyledGreenText = styled(Text)`
  && {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: ${colors.green_90};
    cursor: pointer;
    margin-bottom: 32px;
  }
`;

export const LastButtonWrapper = styled.div`
  margin-top: 76px;
  width: 100%;
`;

export const FourthStepCreatedLocationsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  flex-direction: column;
  max-height: 100px;
  overflow-y: scroll;
  margin-bottom: 48px;
  /* ::-webkit-scrollbar {
    display: none;
  } */
`;

export const FourthStepCreatedLocationsSingleRow = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  > p {
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.15px;
  }
`;
