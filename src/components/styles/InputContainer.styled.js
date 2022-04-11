import styled from "styled-components";

export const StyledInputContainer = styled.div`
  cursor: pointer;
  position: relative;
  margin: 1rem 0.4rem;

  &::after {
    content: "";
    display: block;
    
    
    width: 20px;
    height: 20px;
    border-radius: 50%;
    opacity: 1;
    transform: translate(10px, -34px);
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
    top: -3px;
    left: 5px;
    width: 30px;
    height: 30px;
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
