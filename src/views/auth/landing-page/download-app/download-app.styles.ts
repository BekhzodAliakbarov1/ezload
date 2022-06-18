import styled from 'styled-components';
import { sizes } from 'styles/variables';

export const DownloadAppWrap = styled.div`
  width: 100%;
  display: flex;
  height: 494px;
  align-items: center;
  justify-content: center;
  gap: 70px;
  position: relative;
  @media (max-width: ${sizes.breakpoints.lg}) {
    gap: 0;
    flex-direction: column;
    margin-bottom: 200px;
  }
`;

export const Image = styled.img`
  position: relative;
  bottom: 180px;
  left: 2%;
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;
export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const BigRectangle = styled.div`
  border: 15px solid #c4e9df;
  position: absolute;
  width: 131px;
  height: 125px;
  top: -140px;
  right: -20px;
`;
