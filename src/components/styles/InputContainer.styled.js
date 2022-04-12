import styled from "styled-components";

export const StyledInputContainer = styled.div`
  cursor: pointer;
  position: relative;
  margin: 1rem 0.4rem;
  width: 50px;
  height: 50px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: 1;
  }

  &:nth-child(1)::after {
    background-color: ${(props) => props.color};
  }

  &:nth-child(2)::after {
    background-color: ${(props) => props.color};
  }

  &:nth-child(3)::after {
    background-color: ${(props) => props.color};
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    opacity: 0;
    border-radius: 50%;
    box-shadow: 5px 5px 10px #cbced5;
    transition: opacity 0.3s ease;
  }

  &.checked::before {
    opacity: 1;
  }
`;
