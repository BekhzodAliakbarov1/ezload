import Text from 'components/typography/text';
import styled from 'styled-components';
import { colors } from 'styles/variables';

export const ProfileSidebarWrapper = styled.div`
  width: 100%;
  min-height: 450px;
  max-width: 282px;
  border-right: 2px solid ${colors.dark_5};
  display: flex;
  flex-direction: column;
  gap: 32px;
  > p {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 16px;
  }
`;

export const StyledLink = styled(Text)<{ active: boolean }>`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: ${(props) => (props.active ? colors.dark_80 : colors.dark_30)};
`;
