import styled from "styled-components";

export const StyledImage = styled.img`
  width: 30%;
  position: absolute;
  top: 70px;
  left: 70px;

  @media screen and (max-width: 1550px) {
    width: 200px;
  }

  @media screen and (max-width: 1150px) {
    width: 200px;
    left: 30px;
  }

  @media screen and (max-width: 850px) {
    width: 100px;
    position: static;
    margin-top: 60px;
  }

  .fade-in {
    animation: 0.5s ease 0.5s normal forwards 1 appear;
    opacity: 0;
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
