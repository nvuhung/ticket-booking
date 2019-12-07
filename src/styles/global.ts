import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  html {
    height: 100%;
    box-sizing: border-box;
  }

  body {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    position: relative;
    margin: 0;
    min-height: 100%;
  }
`;
