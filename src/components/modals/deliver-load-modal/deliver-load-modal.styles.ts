import styled from 'styled-components';

export const ChildrenWrapper = styled.div`
  /* width: fit-content;
  height: fit-content; */
`;

export const ModalWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.bg.secondary};
  padding: 56px 80px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  > p {
    width: 470px;
    text-align: center;
  }
  box-shadow: 0px 4px 24px rgba(20, 38, 73, 0.06);
  border-radius: 8px;
  @media (max-width: 800px) {
    max-width: 90vw;
    width: 100%;
    padding: 24px;
    > p {
      width: 100%;
    }
  }
`;

export const ModalButtonsWrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 16px;
  @media (max-width: 800px) {
    width: 100%;
    button {
      width: auto !important;
    }
  }
`;
