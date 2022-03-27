import React, { useState } from "react";
import { StyledInput } from "./styles/Input.styled";

const Input = ({ value, defaultChecked, handleChange, checked }) => {
  
  return (
    <StyledInput
      type="radio"
      value={value}
      defaultChecked={defaultChecked}
      checked={checked}

      onClick={handleChange}
    />
  );
};

export default Input;
