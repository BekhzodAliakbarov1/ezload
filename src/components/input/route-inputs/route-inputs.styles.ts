import styled, { css } from 'styled-components';

export const popperStyles = css`
  width: 100%;
  height: 200px;
  box-shadow: ${({ theme }) => theme.shadows[3]};
  display: flex;
  justify-content: center;
  padding-top: 20px;
  z-index: 1001;
`;

export const List = styled.div`
  width: 500px;
  max-height: 300px;

  overflow: auto;
  ::-webkit-scrollbar {
    width: 4px;
  }
  @media (max-width: 800px) {
    width: 300px;
  }
`;

export const Rows = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 30px 15px;
  :hover {
    background-color: ${(props) => props.theme.bg.secondary};
  }
`;

export const Div = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
