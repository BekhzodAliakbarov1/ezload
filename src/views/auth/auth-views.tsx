import { Switch } from '@mui/material';
import CheckListIcon from 'assets/icons/checklist.icon';
import CloseIcon from 'assets/icons/close.icon';
import FalgIcon from 'assets/icons/flag.icon';
import HeaderPhoneIcon from 'assets/icons/headerphone.icon';
import HideEyeIcon from 'assets/icons/hide_eye.icon';
import LocationIcon from 'assets/icons/location.icon';
import LogoutIcon from 'assets/icons/logout.icon';
import PenIcon from 'assets/icons/pen.icon';
import SearchIcon from 'assets/icons/search.icon';
import SettingIcon from 'assets/icons/settings.icon';
import ShowEyeIcon from 'assets/icons/show_eye.icon';
import XIcon from 'assets/icons/x.icon';
import { useTheme } from 'global-state/theme/theme.state';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Text = styled.h1`
  color: ${(props) => props.theme.text.main};
`;

const ExampleDiv = styled.div`
  svg {
    color: ${(props) => props.theme.text.main};
  }
`;

const Example0 = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <ExampleDiv>
      <Switch checked={theme === 'dark'} onChange={toggleTheme} />
      <CheckListIcon />
      <CloseIcon />
      <FalgIcon />
      <HeaderPhoneIcon />
      <HideEyeIcon />
      <LocationIcon />
      <LogoutIcon />
      <PenIcon />
      <SearchIcon />
      <SettingIcon />
      <ShowEyeIcon />
      <XIcon />
    </ExampleDiv>
  );
};
const Example1 = () => <Text>hello1</Text>;
const Example2 = () => <Text>hello2</Text>;

export const AuthViews = () => (
  <Routes>
    <Route path="/" element={<Example0 />} />
    <Route path=":id" element={<Example1 />} />
    <Route path="me" element={<Example2 />} />
  </Routes>
);

export default AuthViews;
