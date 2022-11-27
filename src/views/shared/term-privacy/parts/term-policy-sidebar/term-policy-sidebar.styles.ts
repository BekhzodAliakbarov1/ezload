import Text from 'components/typography/text';
import styled from 'styled-components';
import { colors } from 'styles/variables';

export const TermSidebarelementsWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 800px) {
    padding: 10px 0px;
    max-width: 100%;
    flex-direction: row;
    margin: auto;
    justify-content: space-between;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      display: none;
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
