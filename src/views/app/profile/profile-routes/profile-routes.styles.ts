import Text from 'components/typography/text';
import styled from 'styled-components';
import { colors } from 'styles/variables';

export const ProfileRoutesDataWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 48px;

  form {
    display: flex;
    align-items: center;
  }
`;

export const ProfileRoutesHeader = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
  align-items: center;
  > p {
    font-size: 24px;
  }
`;
export const MyRoutesEditButtonWrapper = styled.div`
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

export const ProfileRoutesInputsWrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: 550px;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
  input {
    width: 100%;
  }
  div {
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
  display: flex;
  gap: 8px;
`;

export const ProfileRoutesCreatedLocationsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  flex-direction: column;
  max-height: 300px;
  overflow-y: scroll;
  margin-bottom: 48px;
  /* ::-webkit-scrollbar {
    display: none;
  } */
`;

export const ProfileRoutesCreatedLocationsSingleRow = styled.div`
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