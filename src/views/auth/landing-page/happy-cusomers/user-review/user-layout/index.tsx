import { CSSProperties } from 'styled-components';
import {
  Box,
  FlexBox,
  Image,
  LocationText,
  UserName,
  UserWrapper,
} from './user-layout.styles';

export interface UserLayoutProps {
  name: string;
  location: string;
  photo: string;
  style?: CSSProperties;
}

const UserLayout = ({ location, name, photo, style }: UserLayoutProps) => {
  return (
    <UserWrapper style={style}>
      <FlexBox>
        <Image src={photo} alt="user" />
        <Box>
          <UserName weight="600">{name}</UserName>
          <LocationText weight="500">{location}</LocationText>
        </Box>
      </FlexBox>
    </UserWrapper>
  );
};

export default UserLayout;
