import React from "react";
import { StyledImage } from "./styles/Image.styled";

const Image = ({ src, isSelected }) => {
  return (
    <StyledImage
      src={src}
      alt="speaker"
      className={` gallery-img ${isSelected && "fade-in"}`}
    />
  );
};

export default Image;
