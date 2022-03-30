import styled from "styled-components";

export const StyledImage = styled.img`
  width: 300px;
  margin-right: 100px;

  @media screen and (max-width: 1150px) {
    max-width: 150px;
    grid-column: span 2;
    margin: 0 auto;
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
