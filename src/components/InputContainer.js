import React from "react";
import Input from "./Input";

const InputContainer = ({
  index,
  uid,
  isCurrentChecked,
  color,
  handleChange,
}) => {
  return (
    <Input
      key={index}
      name={uid}
      // checked={isCurrentChecked}
      // value={color}
      // handleChange={() => handleChange(index, color)}
    />
  );
};

export default InputContainer;
