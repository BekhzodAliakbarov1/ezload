import styled from 'styled-components';
import { colors } from 'styles/variables';

export const HappyCusmrWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px 0 96px 0;
  /* bottom: 80px; */
  position: relative;
  background-color: ${(props) => props.theme.bg.secondary};
  @media (max-width: 800px) {
    padding: 0pz 24px;
  }
`;

export const Rectangle = styled.div`
  position: relative;
  bottom: 60px;
  width: 89px;
  height: 83px;
  border: 10px solid ${colors.green_30};
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
`;

export const FlexBox = styled(Row)`
  gap: 70px;
  justify-content: space-between;
  margin-bottom: 80px;
  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 60px;
    flex-direction: column;
    padding: 0px 24px;
  }
`;

export const FirstBox = styled(Column)`
  justify-content: center;
  gap: 70px;
  @media (max-width: 800px) {
    width: 100%;
    align-items: center;
    gap: 40px;
  }
`;

export const SecondBox = styled(Column)`
  gap: 56px;
  @media (max-width: 800px) {
    > img {
      display: none;
    }
    width: 100%;
    align-items: center;
    gap: 40px;
  }
`;

export const ThirdBox = styled(Column)`
  gap: 70px;
  @media (max-width: 800px) {
    width: 100%;
    align-items: center;
    gap: 40px;
  }
`;

export const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 300px;
  button {
    width: fit-content !important;
  }
  @media (max-width: 800px) {
    margin-bottom: 100px;
  }
`;

export const TextBox = styled.div<{ align?: string }>`
  width: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;
  text-align: ${({ align }) => align ?? 'center'} !important;
  margin: 0 auto 62px auto;
  gap: 16px;
  padding: 0px 24px;
`;
