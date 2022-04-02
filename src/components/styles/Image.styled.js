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
    animation: 2.5s ease 2.5s normal forwards 1 appear;
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
