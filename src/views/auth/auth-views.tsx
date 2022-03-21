import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Text = styled.h1`
  color: ${(props) => props.theme.text.main};
`;

const Example0 = () => <Text>hello0</Text>;
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
