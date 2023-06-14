import styled from "styled-components";

export const DivMain = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  justify-content: space-evenly;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  align-content: center;

  & > .card {
    flex: 1 0 200px;
  }

  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

interface NoResultProps {
  size?: number;
}

export const NoResult = styled.span<NoResultProps>`{
  font-family: "Creepster", cursive;
  font-size: ${(props) => props.size || 1}em;
  font-weight: 100;
  text-shadow: 2px 2px 1px #b9d740, -2px -2px 1px #b9d740, 2px -2px 1px #b9d740,
    -2px 2px 1px #b9d740;
  -webkit-text-stroke: 1px #000;
  color: #40aec4;
`;
