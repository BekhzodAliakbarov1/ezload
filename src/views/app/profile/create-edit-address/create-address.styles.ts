import styled from 'styled-components';

export const CreateAddressWrapper = styled.div`
  width: 100%;
  padding: 0px 100px 43px 48px;
  > p {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 64px;
  }
`;

export const CreateAddressInputsBox = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 43px;
  justify-content: space-between;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 353px;
  }
`;

export const CreateAddressMapWrapper = styled.div`
  width: 100%;
  height: 372px;
  background-position: center;
  background-size: cover;
  margin-bottom: 48px;
`;

export const CreateAddressButtonsWrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 24px;
  button {
    width: 240px;
  }
`;
