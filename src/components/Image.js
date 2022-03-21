import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
    
    width: 30%;
    position: absolute;
    top: 70px;
    left: 70px;
  
    @media screen and (max-width: 1550px ) {
      width: 200px;
    }

    @media screen and (max-width: 1150px ) {
      width: 200px;
      left: 30px;
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
`

const Image = ({src, isSelected}) => {
  return  <StyledImage
  src={src}
  alt="speaker"
  className={` gallery-img ${isSelected && "fade-in"}`}
/>
};

export default Image;
