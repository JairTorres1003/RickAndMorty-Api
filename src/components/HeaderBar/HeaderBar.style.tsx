import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  background: radial-gradient(
    at center bottom,
    rgb(21, 29, 40) 0px,
    rgb(9, 10, 15) 100%
  );
  inset: 0px;
  box-shadow: rgb(0, 0, 0) 0px 0px 10px;
  height: 80px;
  position: fixed;
  z-index: 10;
  align-items: center;
  justify-content: space-between;

  h1.title {
    font-family: "Creepster", cursive;
    font-size: 1.45em;
    font-weight: 100;
    text-align: center;
    text-shadow: rgb(185, 215, 64) 2px 2px 1px, rgb(185, 215, 64) -2px -2px 1px,
      rgb(185, 215, 64) 2px -2px 1px, rgb(185, 215, 64) -2px 2px 1px;
    -webkit-text-stroke: 1px rgb(0, 0, 0);
    color: rgb(64, 174, 196);
    max-width: 200px;
    min-width: 120px;
    padding: 10px;
    height: 100%;
    display: grid;
    place-items: center;
  }
`;

interface HiddenSpaceProps {
  /**
   * The title of the header.
   */
  titlePage: string;
}

export const HiddenSpace = styled.span<HiddenSpaceProps>`
  @media screen and (min-width: 500px) {
    font-family: Creepster, cursive;
    font-size: 1.45em;
    font-weight: 100;
    text-align: center;
    color: transparent;
    -webkit-text-fill-color: transparent;
    max-width: 200px;
    min-width: 120px;
    padding: 10px;
    height: 100%;
    opacity: 0;
    position: relative;

    &::before {
      content: "${(props) => props.titlePage}";
      color: transparent;
      -webkit-text-fill-color: transparent;
    }

    &::after {
      content: "";
      opacity: 0;
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  @media screen and (max-width: 500px) {
    width: 60px;
    display: block;
  }
`;
