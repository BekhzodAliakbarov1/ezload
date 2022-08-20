import styled from 'styled-components';

export const ChildrenWrapper = styled.div`
  /* width: fit-content;
  height: fit-content; */
`;

export const ModalWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 56px 80px;
  background-color: ${(props) => props.theme.bg.secondary};
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
  @media (max-width: 800px) {
    max-width: 90vw;
    padding: 24px;
    > p {
      font-size: 18px;
      margin-bottom: 24px;
    }
  }
`;

export const ModalButtonsWrapper = styled.div`
  display: flex;
  width: fit-content;
  gap: 24px;
  margin: auto;
`;
