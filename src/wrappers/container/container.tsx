import styled from 'styled-components';

const Container = styled.div`
  max-width: 1290px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${(props) => props.theme.sizes.xl}) {
    padding: 0 24px;
  }

  @media (max-width: ${(props) => props.theme.sizes.lg}) {
    padding: 0 0px;
  }

  @media (max-width: ${(props) => props.theme.sizes.md}) {
    padding: 0 0px;
  }

  @media (max-width: ${(props) => props.theme.sizes.sm}) {
    padding: 0 0px;
  }
`;

export default Container;
