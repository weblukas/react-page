import React from "react";
import { StyledImage } from "./styles/Image.styled";

const Image = ({ src }) => {
  return <StyledImage src={src} alt="speaker" className={` gallery-img `} />;
};

export default Image;
