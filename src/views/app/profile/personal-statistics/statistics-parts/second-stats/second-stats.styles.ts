import styled from 'styled-components';

export const SecondStatsWrapper = styled.div`
  width: 100%;
  padding: 64px 0px;
  border-top: 2px solid ${(props) => props.theme.text.main_5};
  border-bottom: 2px solid ${(props) => props.theme.text.main_5};
`;

export const HeaderAndYearWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .MuiSelect-select {
    padding: 8px 16px;
    font-size: 16px;
    color: ${(props) => props.theme.text.main_100};
  }
  fieldset {
    border-color: ${(props) => props.theme.text.main_20};
  }
  svg {
    fill: ${(props) => props.theme.text.main_100};
  }
`;
