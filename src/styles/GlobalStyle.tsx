import { createGlobalStyle } from "styled-components";
import Creepster from "../fonts/Creepster-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Creepster";
    src: url('${Creepster}') format("truetype");
  }

  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #151d28;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  * {
    margin: 0px;
    padding: 0px;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  button { background: transparent; border: 0; outline: 0; }
  a { color: inherit; -webkit-text-stroke: inherit; text-decoration: none; }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    transition: background-color 99999s ease-in-out 0s;
  }

  main {
    min-height: 100vh;
    overscroll-behavior: none;
    width: 100%;
    padding: 20px;
    padding-top: 100px;
    position: relative;
    background-color: #484f59;
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    :hover::-webkit-scrollbar-thumb {
      background-color: rgb(126 126 126);
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: rgb(126 126 126);
      border-radius: 4px;
    }
  }
`;
