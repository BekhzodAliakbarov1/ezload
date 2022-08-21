import styled from 'styled-components';

export const ThirdStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  gap: 88px;
  padding-bottom: 64px;
  border-bottom: 2px solid ${(props) => props.theme.text.main_5};
`;
