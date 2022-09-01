import Text from 'components/typography/text';
import styled from 'styled-components';

export const UserWrapper = styled.div`
  max-width: 205px;
  width: 100%;
  margin-left: 15px;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 47px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserName = styled(Text)`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: ${(props) => props.theme.text.main_100};
`;

export const LocationText = styled(Text)`
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.text.main_80};
`;
