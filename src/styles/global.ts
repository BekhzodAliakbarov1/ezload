import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  *,html,body {
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
  }
  body {
    background: ${(props) => props.theme.bg.main};
    height: 100%;
    text-align: center;
    width: 100%;
  }
  h1,h2,h3,h4,h5,h6,a{
    font-family: 'Roboto', sans-serif
  }
  a {
    text-decoration: none;
  }
  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    opacity: 0.8;    

  }

  ::-webkit-scrollbar-track {
    background-color: #e8ebee;
    border: 3px solid #e8ebee;
    box-sizing: border-box;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #7c859f;
    border-radius: 20px;
  }

`;
