import Text from 'components/typography/text';
import styled from 'styled-components';
import { colors } from 'styles/variables';

export const ProfileSidebarWrapper = styled.div`
  width: 100%;
  min-height: 450px;
  max-width: 282px;
  border-right: 2px solid ${(props) => props.theme.text.main_5};
  div {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  > p {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 48px;
  }
  @media (max-width: 800px) {
    border-right: 0px solid;
    max-width: 100%;
    min-height: auto;
    background-color: ${(props) => props.theme.bg.main};
    padding: 0px 24px;
    div {
      flex-direction: row;
      margin: auto;
      justify-content: space-between;
      overflow-x: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
    }
    > p {
      margin-bottom: 16px;
    }
  }
`;

export const StyledLink = styled(Text)<{ active: boolean }>`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.15px;
  text-transform: capitalize;
  color: ${(props) =>
    props.active ? props.theme.text_active.active : props.theme.text.main_30};
  @media (max-width: 800px) {
    padding: 12px 0px;
    font-size: 13px;
    border-bottom: 4px solid
      ${(props) => (props.active ? colors.green_70 : props.theme.bg.main)};
  }
  width: max-content;
`;
