import { createGlobalStyle } from 'styled-components';

import BASE_SIZE from '../constants/baseSize';
import Palette from '../constants/palette';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #ffffff;
    background-color: #121619;
  }

  button {
    font-family: inherit;
    font-size: inherit;
  }

  h1 {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: ${BASE_SIZE * 4}px;
  }

  h2 {
    font-size: 2.25rem;
    font-weight: 600;
    margin-bottom: ${BASE_SIZE * 3}px;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: ${BASE_SIZE * 2}px;
  }

  table {
    width: 100%;
    background-color: ${Palette.asphaltGrey};

    tr:first-child {
      border-bottom: 1px solid ${Palette.pigeonGrey};
    }

    th {
      text-align: left;
    }
    
    th, td {
      padding: ${BASE_SIZE}px;
    }
  }

  a {
    color: inherit;
  }
`;

export default GlobalStyles;
