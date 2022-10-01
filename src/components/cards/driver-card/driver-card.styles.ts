import styled from 'styled-components';

export const DriverCardWrapper = styled.div<{
  shadow: boolean;
  clickable: boolean;
  bg_color: string | undefined;
}>`
  width: 299px;
  height: 136px;
  background-color: ${(props) =>
    props.bg_color === 'white'
      ? props.theme.bg.secondary
      : props.theme.bg.main};
  box-shadow: ${(props) =>
    props.shadow && !props.clickable && '0px 6px 8px rgba(60, 181, 149, 0.1)'};
  border-radius: 4px;
  display: flex;
  padding: 16px;
  opacity: 0.9;
  cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};
  align-items: center;
  :hover {
    opacity: 1;
    box-shadow: ${(props) =>
      props.clickable && '0px 6px 8px rgba(60, 181, 149, 0.1)'};
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const DriverCardInfoWrapper = styled.div`
  display: flex;
  height: 80%;
  margin-left: 16px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  text-align: left;
  > p:nth-child(1) {
    font-size: 14px;
  }
`;
