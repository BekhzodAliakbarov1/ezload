import styled from 'styled-components';
import { colors } from 'styles/variables';

export const LoadAddressWrapper = styled.div`
  width: 100%;
  > p {
    margin-bottom: 32px;
  }
`;

export const LoadAddressFlexWrapper = styled.div`
  display: flex;
  gap: 31px;
  height: 100%;
`;

export const VerticalLineWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  span {
    width: 0px;
    border-left: 1.25px dashed ${colors.red_70};
    height: 528px;

    /* transform: rotate(90deg); */
  }
`;

export const LoccationIconWrapper = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${colors.red_100};
`;

export const AllLocationInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
  margin-bottom: 56px;
`;
