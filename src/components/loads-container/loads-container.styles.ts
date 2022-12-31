import styled from 'styled-components';

export const LoadsContainerBox = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const NoLoadsFindSection = styled.div`
  width: 100%;
  padding-top: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  > p {
    font-size: 24px;
    line-height: 24px;
    color: ${(props) => props.theme.text.main_30};
  }
`;
