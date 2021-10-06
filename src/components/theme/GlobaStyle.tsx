import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');
  body {
    padding: 0;
    margin: 0 auto;
    width: 810px;
  }
  *{
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }
`;

export default GlobalStyle;
