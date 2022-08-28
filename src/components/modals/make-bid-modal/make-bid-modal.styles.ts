import styled from 'styled-components';

export const ChildrenWrapper = styled.div`
  /* width: fit-content;
  height: fit-content; */
`;

export const ModalWrapper = styled.form`
  width: fit-content;
  height: fit-content;
  padding: 56px 80px;
  background-color: ${(props) => props.theme.bg.secondary};
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  border-radius: 8px;
  input {
    width: 352px;
  }
  .header {
    font-size: 24px;
    line-height: 24px;
    text-align: center;
  }
  .cost {
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.25px;
    color: ${(props) => props.theme.text.main_60};
  }
  @media (max-width: 800px) {
    width: 90vw;
    height: fit-content;
    padding: 24px;
    > p {
      font-size: 16px;
      margin-bottom: 24px;
    }
    input {
      width: 100%;
    }
  }
`;

export const ModalButtonsWrapper = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  justify-content: center;
  button {
    width: 120px;
  }
  @media (max-width: 800px) {
    button {
      width: fit-content;
      max-width: fit-content;
    }
  }
`;
