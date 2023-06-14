import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: grid;
  place-items: center;
  background-color: #090a0f;
  background: radial-gradient(ellipse at bottom, #151d28 0, #090a0f 100%);
  bottom: 0;
  box-shadow: 0 0 10px #000;
  height: 80px;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;

  h1.title {
    font-family: "Creepster", cursive;
    font-size: 3em;
    font-weight: 100;
    position: absolute;
    text-align: center;
    text-shadow: 2px 2px 1px #b9d740, -2px -2px 1px #b9d740,
      2px -2px 1px #b9d740, -2px 2px 1px #b9d740;
    -webkit-text-stroke: 1px #000;
    color: #40aec4;
  }

  @media screen and (max-width: 340px) {
    & > h1.title {
      font-size: 2rem;
    }
  }
`;
