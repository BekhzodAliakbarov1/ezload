import styled from 'styled-components';

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  line-height: 17px;
  color: ${(props) => props.theme.text.light};
  margin-bottom: 16px;
  width: max-content;
`;
export default Label;
