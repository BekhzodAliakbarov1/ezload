import styled from 'styled-components';

export const DriverCardWrapper = styled.div<{ shadow: boolean }>`
  width: 299px;
  height: 136px;
  background-color: ${(props) => props.theme.bg.main};
  box-shadow: ${(props) =>
    props.shadow && '0px 6px 8px rgba(60, 181, 149, 0.1)'};
  border-radius: 4px;
  display: flex;
  padding: 16px;
  /* justify-content: space-between; */
  align-items: center;
`;

export const DriverCardInfoWrapper = styled.div`
  display: flex;
  height: 80%;
  margin-left: 16px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin: auto;
`;
