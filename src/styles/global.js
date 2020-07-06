import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/images/background.svg';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height:100%;
  }
  body{
    background: #121216 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    font-size: 14px;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  #root {
    max-width: 95%;
    margin: 0 auto;
    padding: 0 2% 2.5%;
  }

  button {
    cursor: pointer;
  }
`;
