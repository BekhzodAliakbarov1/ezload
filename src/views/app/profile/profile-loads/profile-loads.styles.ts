import styled from 'styled-components';
import { colors } from 'styles/variables';

export const ProfileLoadsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 48px;

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
    props.active ? colors.red_20 : colors.dark_5};
  p {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: ${(props) => (props.active ? colors.red_100 : colors.dark_60)};
  }
  @media (max-width: 800px) {
    padding: 8px 28px;
    p {
      font-size: 12px;
    }
  }
`;

export const LoadingComponentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
