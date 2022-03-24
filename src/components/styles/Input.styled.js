import styled from "styled-components";

export const StyledInput = styled.input`
  margin: 1rem;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    opacity: 1;
    transform: translate(-4px, -34px);
    z-index: 10;
  }

  &:nth-child(1)::after {
    background-color: black;
  }

  &:nth-child(2)::after {
    background-color: #e33a3f;
  }

  &:nth-child(3)::after {
    background-color: #90ae9e;
  }

  &:nth-child(4)::after {
    background-color: #3d5367;
  }
  &::before {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    background-color: #df82d2;
    opacity: 0;
    border-radius: 50%;
    transform: translate(-9px, -9px);
    z-index: 5;
  }

  &:checked::before {
    opacity: 1;
  }
`;
