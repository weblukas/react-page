import React from "react";
import { StyledInput } from "./styles/Input.styled";

const Input = ({ value, defaultChecked, handleChange }) => {
  return (
    <StyledInput
      type="radio"
      value={value}
      defaultChecked={defaultChecked}
      // checked={isSelected("black")}

      onClick={handleChange}
    />
  );
};

export default Input;
