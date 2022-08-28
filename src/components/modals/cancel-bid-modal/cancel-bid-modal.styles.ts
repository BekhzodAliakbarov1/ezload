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
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  > p {
    width: auto;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.15px;
    margin-bottom: 48px;
    text-align: center;
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
  width: fit-content;
  gap: 24px;
  display: flex;
  margin: auto;
`;
