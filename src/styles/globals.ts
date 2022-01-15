import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  /* h1, h2, h3, h4, h5 {
    font-size: 1rem;
  } */

  input, button, textarea {
    font: 'Roboto', sans-serif;
    font-size: 16px;
  }

  @font-face {
    font-family: 'UberMoveBold';
    src: url('../../fonts/UberMoveBold.otf') format('opentype');
    font-weight: bold;
  }

  @font-face {
    font-family: 'UberMoveMedium';
    src: url('../../fonts/UberMoveMedium.otf') format('opentype');
    font-weight: normal;
  }
`;