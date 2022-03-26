import { Switch } from '@mui/material';
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
    </ExampleDiv>
  );
};
const Example1 = () => <Text>helH1/Roboto/Light/96pxlo1</Text>;
const Example2 = () => <Text>helH1/Roboto/Light/96pxslo2</Text>;

export const AuthViews = () => (
  <Routes>
    <Route path="/" element={<Example0 />} />
    <Route path=":id" element={<Example1 />} />
    <Route path="me" element={<Example2 />} />
  </Routes>
);

export default AuthViews;
