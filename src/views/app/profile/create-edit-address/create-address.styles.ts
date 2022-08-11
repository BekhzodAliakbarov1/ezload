import styled from 'styled-components';

export const CreateAddressWrapper = styled.form`
  width: 100%;
  padding: 0px 100px 43px 48px;
  > p {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 64px;
  }
  @media (max-width: 800px) {
    padding: 30px 24px;
    > p {
      margin-bottom: 40px;
    }
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
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const CreateAddressMapWrapper = styled.div`
  width: 100%;
  height: 372px;
  margin-bottom: 48px;
`;

export const CreateAddressButtonsWrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 24px;
  button {
    width: 240px;
  }
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    gap: 12px;
    button {
      width: 100%;
    }
  }
`;
