import styled from 'styled-components';

export const ProfileLoadsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 48px;
  position: relative;
  @media (max-width: 800px) {
    padding: 0px 24px;
    padding-bottom: 30px;
  }
`;

export const SectionControllerWrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 2px;
  margin-bottom: 52px;
  @media (max-width: 800px) {
    width: 100%;
    margin: 24px 0px;
    justify-content: space-between;
  }
`;

export const SingleController = styled.div<{ active: boolean }>`
  padding: 12px 40px;
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? props.theme.button.red_active : props.theme.text.main_5};
  p {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: ${(props) =>
      props.active
        ? props.theme.text_active.red_active
        : props.theme.text.main_60};
  }
  @media (max-width: 800px) {
    padding: 8px 28px;
    p {
      font-size: 12px;
    }
  }
`;

export const PlusIconWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 90%;
  left: 95%;
  background-color: ${(props) => props.theme.button.contained};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  width: 50px;
  height: 50px;
  @media (max-width: 800px) {
    top: 90%;
    left: 80%;
    width: 40px;
    height: 40px;
  }
`;
