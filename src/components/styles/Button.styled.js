import styled from "styled-components";

export const StyledButton = styled.button`
  grid-column: 2;
  grid-row: 3;
  align-self: end;
  justify-self: center;
  width: 120px;
  height: 40px;
  margin: 1rem;
  border: none;
  background-color: #df82d2;
  border-radius: 7px;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  @media screen and (max-width: 1150px) {
    grid-column: span 2;
  }
`;
